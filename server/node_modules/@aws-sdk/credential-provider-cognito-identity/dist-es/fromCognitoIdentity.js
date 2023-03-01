import { GetCredentialsForIdentityCommand } from "@aws-sdk/client-cognito-identity";
import { CredentialsProviderError } from "@aws-sdk/property-provider";
import { resolveLogins } from "./resolveLogins";
export function fromCognitoIdentity(parameters) {
    return async () => {
        const { Credentials: { AccessKeyId = throwOnMissingAccessKeyId(), Expiration, SecretKey = throwOnMissingSecretKey(), SessionToken, } = throwOnMissingCredentials(), } = await parameters.client.send(new GetCredentialsForIdentityCommand({
            CustomRoleArn: parameters.customRoleArn,
            IdentityId: parameters.identityId,
            Logins: parameters.logins ? await resolveLogins(parameters.logins) : undefined,
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
function throwOnMissingAccessKeyId() {
    throw new CredentialsProviderError("Response from Amazon Cognito contained no access key ID");
}
function throwOnMissingCredentials() {
    throw new CredentialsProviderError("Response from Amazon Cognito contained no credentials");
}
function throwOnMissingSecretKey() {
    throw new CredentialsProviderError("Response from Amazon Cognito contained no secret key");
}
