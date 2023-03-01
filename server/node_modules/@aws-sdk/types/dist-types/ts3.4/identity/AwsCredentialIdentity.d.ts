import { Identity, IdentityProvider } from "./Identity";
export interface AwsCredentialIdentity extends Identity {
  readonly accessKeyId: string;
  readonly secretAccessKey: string;
  readonly sessionToken?: string;
}
export declare type AwsCredentialIdentityProvider =
  IdentityProvider<AwsCredentialIdentity>;
