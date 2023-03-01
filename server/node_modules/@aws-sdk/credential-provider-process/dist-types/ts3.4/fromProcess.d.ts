import { SourceProfileInit } from "@aws-sdk/shared-ini-file-loader";
import { AwsCredentialIdentityProvider } from "@aws-sdk/types";
export interface FromProcessInit extends SourceProfileInit {}
export declare const fromProcess: (
  init?: FromProcessInit
) => AwsCredentialIdentityProvider;
