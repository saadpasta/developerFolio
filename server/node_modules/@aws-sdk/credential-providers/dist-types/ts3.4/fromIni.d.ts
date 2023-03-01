import { STSClientConfig } from "@aws-sdk/client-sts";
import { FromIniInit as _FromIniInit } from "@aws-sdk/credential-provider-ini";
import { AwsCredentialIdentityProvider, Pluggable } from "@aws-sdk/types";
export interface FromIniInit extends _FromIniInit {
  clientConfig?: STSClientConfig;
  clientPlugins?: Pluggable<any, any>[];
}
export declare const fromIni: (
  init?: FromIniInit
) => AwsCredentialIdentityProvider;
