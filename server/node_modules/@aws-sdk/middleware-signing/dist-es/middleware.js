import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { getSkewCorrectedDate } from "./utils/getSkewCorrectedDate";
import { getUpdatedSystemClockOffset } from "./utils/getUpdatedSystemClockOffset";
export const awsAuthMiddleware = (options) => (next, context) => async function (args) {
    if (!HttpRequest.isInstance(args.request))
        return next(args);
    const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
    const multiRegionOverride = authScheme?.name === "sigv4a" ? authScheme?.signingRegionSet?.join(",") : undefined;
    const signer = await options.signer(authScheme);
    const output = await next({
        ...args,
        request: await signer.sign(args.request, {
            signingDate: getSkewCorrectedDate(options.systemClockOffset),
            signingRegion: multiRegionOverride || context["signing_region"],
            signingService: context["signing_service"],
        }),
    }).catch((error) => {
        const serverTime = error.ServerTime ?? getDateHeader(error.$response);
        if (serverTime) {
            options.systemClockOffset = getUpdatedSystemClockOffset(serverTime, options.systemClockOffset);
        }
        throw error;
    });
    const dateHeader = getDateHeader(output.response);
    if (dateHeader) {
        options.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, options.systemClockOffset);
    }
    return output;
};
const getDateHeader = (response) => HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : undefined;
export const awsAuthMiddlewareOptions = {
    name: "awsAuthMiddleware",
    tags: ["SIGNATURE", "AWSAUTH"],
    relation: "after",
    toMiddleware: "retryMiddleware",
    override: true,
};
export const getAwsAuthPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(awsAuthMiddleware(options), awsAuthMiddlewareOptions);
    },
});
export const getSigV4AuthPlugin = getAwsAuthPlugin;
