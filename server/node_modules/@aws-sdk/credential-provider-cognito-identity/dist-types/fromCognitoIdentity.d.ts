import { AwsCredentialIdentity, Provider } from "@aws-sdk/types";
import { CognitoProviderParameters } from "./CognitoProviderParameters";
export interface CognitoIdentityCredentials extends AwsCredentialIdentity {
    /**
     * The Cognito ID returned by the last call to AWS.CognitoIdentity.getOpenIdToken().
     */
    identityId: string;
}
export declare type CognitoIdentityCredentialProvider = Provider<CognitoIdentityCredentials>;
/**
 * Retrieves temporary AWS credentials using Amazon Cognito's
 * `GetCredentialsForIdentity` operation.
 *
 * Results from this function call are not cached internally.
 */
export declare function fromCognitoIdentity(parameters: FromCognitoIdentityParameters): CognitoIdentityCredentialProvider;
export interface FromCognitoIdentityParameters extends CognitoProviderParameters {
    /**
     * The unique identifier for the identity against which credentials will be
     * issued.
     */
    identityId: string;
}
