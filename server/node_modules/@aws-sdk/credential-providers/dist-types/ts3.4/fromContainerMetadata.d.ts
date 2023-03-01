import { RemoteProviderInit as _RemoteProviderInit } from "@aws-sdk/credential-provider-imds";
import { AwsCredentialIdentityProvider } from "@aws-sdk/types";
export interface RemoteProviderInit extends _RemoteProviderInit {}
export declare const fromContainerMetadata: (
  init?: RemoteProviderInit | undefined
) => AwsCredentialIdentityProvider;
