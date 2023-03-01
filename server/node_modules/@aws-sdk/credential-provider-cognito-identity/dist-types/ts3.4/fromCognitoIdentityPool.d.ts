import { CognitoProviderParameters } from "./CognitoProviderParameters";
import { CognitoIdentityCredentialProvider } from "./fromCognitoIdentity";
import { Storage } from "./Storage";
export declare function fromCognitoIdentityPool({
  accountId,
  cache,
  client,
  customRoleArn,
  identityPoolId,
  logins,
  userIdentifier,
}: FromCognitoIdentityPoolParameters): CognitoIdentityCredentialProvider;
export interface FromCognitoIdentityPoolParameters
  extends CognitoProviderParameters {
  accountId?: string;
  cache?: Storage;
  identityPoolId: string;
  userIdentifier?: string;
}
