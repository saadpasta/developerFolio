import { STSClientConfig } from "@aws-sdk/client-sts";
import { FromWebTokenInit as _FromWebTokenInit } from "@aws-sdk/credential-provider-web-identity";
import { AwsCredentialIdentityProvider, Pluggable } from "@aws-sdk/types";
export interface FromWebTokenInit extends _FromWebTokenInit {
  clientConfig?: STSClientConfig;
  clientPlugins?: Pluggable<any, any>[];
}
export declare const fromWebToken: (
  init: FromWebTokenInit
) => AwsCredentialIdentityProvider;
