import { resolveAwsAuthConfig } from "@aws-sdk/middleware-signing";
export const resolveStsAuthConfig = (input, { stsClientCtor }) => resolveAwsAuthConfig({
    ...input,
    stsClientCtor,
});
