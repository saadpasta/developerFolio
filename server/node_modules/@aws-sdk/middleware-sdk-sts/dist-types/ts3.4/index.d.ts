import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
} from "@aws-sdk/middleware-signing";
import {
  AwsCredentialIdentity,
  ChecksumConstructor,
  Client,
  HashConstructor,
  Provider,
  RegionInfoProvider,
} from "@aws-sdk/types";
export interface StsAuthInputConfig extends AwsAuthInputConfig {}
interface PreviouslyResolved {
  credentialDefaultProvider: (input: any) => Provider<AwsCredentialIdentity>;
  region: string | Provider<string>;
  regionInfoProvider?: RegionInfoProvider;
  signingName?: string;
  serviceId: string;
  sha256: ChecksumConstructor | HashConstructor;
  useFipsEndpoint: Provider<boolean>;
  useDualstackEndpoint: Provider<boolean>;
}
export interface StsAuthResolvedConfig extends AwsAuthResolvedConfig {
  stsClientCtor: new (clientConfig: any) => Client<any, any, any>;
}
export interface StsAuthConfigOptions {
  stsClientCtor: new (clientConfig: any) => Client<any, any, any>;
}
export declare const resolveStsAuthConfig: <T>(
  input: T & PreviouslyResolved & StsAuthInputConfig,
  { stsClientCtor }: StsAuthConfigOptions
) => T & StsAuthResolvedConfig;
export {};
