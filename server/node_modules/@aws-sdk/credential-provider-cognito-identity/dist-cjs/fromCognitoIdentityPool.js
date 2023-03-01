"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromCognitoIdentityPool = void 0;
const client_cognito_identity_1 = require("@aws-sdk/client-cognito-identity");
const property_provider_1 = require("@aws-sdk/property-provider");
const fromCognitoIdentity_1 = require("./fromCognitoIdentity");
const localStorage_1 = require("./localStorage");
const resolveLogins_1 = require("./resolveLogins");
function fromCognitoIdentityPool({ accountId, cache = (0, localStorage_1.localStorage)(), client, customRoleArn, identityPoolId, logins, userIdentifier = !logins || Object.keys(logins).length === 0 ? "ANONYMOUS" : undefined, }) {
    const cacheKey = userIdentifier ? `aws:cognito-identity-credentials:${identityPoolId}:${userIdentifier}` : undefined;
    let provider = async () => {
        let identityId = cacheKey && (await cache.getItem(cacheKey));
        if (!identityId) {
            const { IdentityId = throwOnMissingId() } = await client.send(new client_cognito_identity_1.GetIdCommand({
                AccountId: accountId,
                IdentityPoolId: identityPoolId,
                Logins: logins ? await (0, resolveLogins_1.resolveLogins)(logins) : undefined,
            }));
            identityId = IdentityId;
            if (cacheKey) {
                Promise.resolve(cache.setItem(cacheKey, identityId)).catch(() => { });
            }
        }
        provider = (0, fromCognitoIdentity_1.fromCognitoIdentity)({
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
exports.fromCognitoIdentityPool = fromCognitoIdentityPool;
function throwOnMissingId() {
    throw new property_provider_1.CredentialsProviderError("Response from Amazon Cognito contained no identity ID");
}
