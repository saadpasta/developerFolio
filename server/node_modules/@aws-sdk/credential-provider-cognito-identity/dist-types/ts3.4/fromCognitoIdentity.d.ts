import { AwsCredentialIdentity, Provider } from "@aws-sdk/types";
import { CognitoProviderParameters } from "./CognitoProviderParameters";
export interface CognitoIdentityCredentials extends AwsCredentialIdentity {
  identityId: string;
}
export declare type CognitoIdentityCredentialProvider =
  Provider<CognitoIdentityCredentials>;
export declare function fromCognitoIdentity(
  parameters: FromCognitoIdentityParameters
): CognitoIdentityCredentialProvider;
export interface FromCognitoIdentityParameters
  extends CognitoProviderParameters {
  identityId: string;
}
