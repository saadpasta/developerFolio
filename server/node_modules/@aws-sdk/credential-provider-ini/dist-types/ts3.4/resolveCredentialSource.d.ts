import { AwsCredentialIdentityProvider } from "@aws-sdk/types";
export declare const resolveCredentialSource: (
  credentialSource: string,
  profileName: string
) => AwsCredentialIdentityProvider;
