import { AssumeRoleCommandInput, STSClientConfig } from "@aws-sdk/client-sts";
import {
  AwsCredentialIdentity,
  AwsCredentialIdentityProvider,
  Pluggable,
} from "@aws-sdk/types";
export interface FromTemporaryCredentialsOptions {
  params: Pick<
    AssumeRoleCommandInput,
    Exclude<keyof AssumeRoleCommandInput, "RoleSessionName">
  > & {
    RoleSessionName?: string;
  };
  masterCredentials?: AwsCredentialIdentity | AwsCredentialIdentityProvider;
  clientConfig?: STSClientConfig;
  clientPlugins?: Pluggable<any, any>[];
  mfaCodeProvider?: (mfaSerial: string) => Promise<string>;
}
export declare const fromTemporaryCredentials: (
  options: FromTemporaryCredentialsOptions
) => AwsCredentialIdentityProvider;
