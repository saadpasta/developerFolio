import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool as _fromCognitoIdentityPool, } from "@aws-sdk/credential-provider-cognito-identity";
export const fromCognitoIdentityPool = (options) => _fromCognitoIdentityPool({
    ...options,
    client: new CognitoIdentityClient(options.clientConfig ?? {}),
});
