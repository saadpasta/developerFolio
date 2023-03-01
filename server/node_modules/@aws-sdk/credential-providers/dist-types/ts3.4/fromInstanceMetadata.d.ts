import { RemoteProviderConfig as _RemoteProviderInit } from "@aws-sdk/credential-provider-imds";
import { AwsCredentialIdentityProvider } from "@aws-sdk/types";
export declare const fromInstanceMetadata: (
  init?: _RemoteProviderInit | undefined
) => AwsCredentialIdentityProvider;
