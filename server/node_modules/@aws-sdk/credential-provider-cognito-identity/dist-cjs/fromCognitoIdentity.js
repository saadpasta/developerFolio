"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromCognitoIdentity = void 0;
const client_cognito_identity_1 = require("@aws-sdk/client-cognito-identity");
const property_provider_1 = require("@aws-sdk/property-provider");
const resolveLogins_1 = require("./resolveLogins");
function fromCognitoIdentity(parameters) {
    return async () => {
        const { Credentials: { AccessKeyId = throwOnMissingAccessKeyId(), Expiration, SecretKey = throwOnMissingSecretKey(), SessionToken, } = throwOnMissingCredentials(), } = await parameters.client.send(new client_cognito_identity_1.GetCredentialsForIdentityCommand({
            CustomRoleArn: parameters.customRoleArn,
            IdentityId: parameters.identityId,
            Logins: parameters.logins ? await (0, resolveLogins_1.resolveLogins)(parameters.logins) : undefined,
        }));
        return {
            identityId: parameters.identityId,
            accessKeyId: AccessKeyId,
            secretAccessKey: SecretKey,
            sessionToken: SessionToken,
            expiration: Expiration,
        };
    };
}
exports.fromCognitoIdentity = fromCognitoIdentity;
function throwOnMissingAccessKeyId() {
    throw new property_provider_1.CredentialsProviderError("Response from Amazon Cognito contained no access key ID");
}
function throwOnMissingCredentials() {
    throw new property_provider_1.CredentialsProviderError("Response from Amazon Cognito contained no credentials");
}
function throwOnMissingSecretKey() {
    throw new property_provider_1.CredentialsProviderError("Response from Amazon Cognito contained no secret key");
}
