import { STSClientConfig } from "@aws-sdk/client-sts";
import { FromTokenFileInit as _FromTokenFileInit } from "@aws-sdk/credential-provider-web-identity";
import { AwsCredentialIdentityProvider, Pluggable } from "@aws-sdk/types";
export interface FromTokenFileInit extends _FromTokenFileInit {
  clientConfig?: STSClientConfig;
  clientPlugins?: Pluggable<any, any>[];
}
export declare const fromTokenFile: (
  init?: FromTokenFileInit
) => AwsCredentialIdentityProvider;
