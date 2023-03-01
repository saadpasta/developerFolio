import { SSOClientConfig } from "@aws-sdk/client-sso";
import { FromSSOInit as _FromSSOInit } from "@aws-sdk/credential-provider-sso";
import { AwsCredentialIdentityProvider } from "@aws-sdk/types";
export interface FromSSOInit
  extends Pick<_FromSSOInit, Exclude<keyof _FromSSOInit, "client">> {
  clientConfig?: SSOClientConfig;
}
export declare const fromSSO: (
  init?: FromSSOInit
) => AwsCredentialIdentityProvider;
