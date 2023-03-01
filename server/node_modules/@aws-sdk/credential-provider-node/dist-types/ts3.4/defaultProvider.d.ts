import { RemoteProviderInit } from "@aws-sdk/credential-provider-imds";
import { FromIniInit } from "@aws-sdk/credential-provider-ini";
import { FromProcessInit } from "@aws-sdk/credential-provider-process";
import { FromSSOInit } from "@aws-sdk/credential-provider-sso";
import { FromTokenFileInit } from "@aws-sdk/credential-provider-web-identity";
import { AwsCredentialIdentity, MemoizedProvider } from "@aws-sdk/types";
export declare type DefaultProviderInit = FromIniInit &
  RemoteProviderInit &
  FromProcessInit &
  FromSSOInit &
  FromTokenFileInit;
export declare const defaultProvider: (
  init?: DefaultProviderInit
) => MemoizedProvider<AwsCredentialIdentity>;
