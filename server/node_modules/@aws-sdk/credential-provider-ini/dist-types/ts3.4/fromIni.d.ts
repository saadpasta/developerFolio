import { AssumeRoleWithWebIdentityParams } from "@aws-sdk/credential-provider-web-identity";
import { SourceProfileInit } from "@aws-sdk/shared-ini-file-loader";
import {
  AwsCredentialIdentity,
  AwsCredentialIdentityProvider,
} from "@aws-sdk/types";
import { AssumeRoleParams } from "./resolveAssumeRoleCredentials";
export interface FromIniInit extends SourceProfileInit {
  mfaCodeProvider?: (mfaSerial: string) => Promise<string>;
  roleAssumer?: (
    sourceCreds: AwsCredentialIdentity,
    params: AssumeRoleParams
  ) => Promise<AwsCredentialIdentity>;
  roleAssumerWithWebIdentity?: (
    params: AssumeRoleWithWebIdentityParams
  ) => Promise<AwsCredentialIdentity>;
}
export declare const fromIni: (
  init?: FromIniInit
) => AwsCredentialIdentityProvider;
