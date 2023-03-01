import { FromProcessInit as _FromProcessInit } from "@aws-sdk/credential-provider-process";
import { AwsCredentialIdentityProvider } from "@aws-sdk/types";
export interface FromProcessInit extends _FromProcessInit {}
export declare const fromProcess: (
  init?: FromProcessInit | undefined
) => AwsCredentialIdentityProvider;
