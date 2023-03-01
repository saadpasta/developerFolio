import { Identity, IdentityProvider } from "./Identity";
export interface AwsCredentialIdentity extends Identity {
    /**
     * AWS access key ID
     */
    readonly accessKeyId: string;
    /**
     * AWS secret access key
     */
    readonly secretAccessKey: string;
    /**
     * A security or session token to use with these credentials. Usually
     * present for temporary credentials.
     */
    readonly sessionToken?: string;
}
export declare type AwsCredentialIdentityProvider = IdentityProvider<AwsCredentialIdentity>;
