import { GetIdCommand } from "@aws-sdk/client-cognito-identity";
import { CredentialsProviderError } from "@aws-sdk/property-provider";
import { fromCognitoIdentity } from "./fromCognitoIdentity";
import { localStorage } from "./localStorage";
import { resolveLogins } from "./resolveLogins";
export function fromCognitoIdentityPool({ accountId, cache = localStorage(), client, customRoleArn, identityPoolId, logins, userIdentifier = !logins || Object.keys(logins).length === 0 ? "ANONYMOUS" : undefined, }) {
    const cacheKey = userIdentifier ? `aws:cognito-identity-credentials:${identityPoolId}:${userIdentifier}` : undefined;
    let provider = async () => {
        let identityId = cacheKey && (await cache.getItem(cacheKey));
        if (!identityId) {
            const { IdentityId = throwOnMissingId() } = await client.send(new GetIdCommand({
                AccountId: accountId,
                IdentityPoolId: identityPoolId,
                Logins: logins ? await resolveLogins(logins) : undefined,
            }));
            identityId = IdentityId;
            if (cacheKey) {
                Promise.resolve(cache.setItem(cacheKey, identityId)).catch(() => { });
            }
        }
        provider = fromCognitoIdentity({
            client,
            customRoleArn,
            logins,
            identityId,
        });
        return provider();
    };
    return () => provider().catch(async (err) => {
        if (cacheKey) {
            Promise.resolve(cache.removeItem(cacheKey)).catch(() => { });
        }
        throw err;
    });
}
function throwOnMissingId() {
    throw new CredentialsProviderError("Response from Amazon Cognito contained no identity ID");
}
