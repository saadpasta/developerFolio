import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentity as _fromCognitoIdentity, } from "@aws-sdk/credential-provider-cognito-identity";
export const fromCognitoIdentity = (options) => _fromCognitoIdentity({
    ...options,
    client: new CognitoIdentityClient(options.clientConfig ?? {}),
});
