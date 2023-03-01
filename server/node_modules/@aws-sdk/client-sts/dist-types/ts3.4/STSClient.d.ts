import {
  RegionInputConfig,
  RegionResolvedConfig,
} from "@aws-sdk/config-resolver";
import {
  EndpointInputConfig,
  EndpointResolvedConfig,
} from "@aws-sdk/middleware-endpoint";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
} from "@aws-sdk/middleware-retry";
import {
  StsAuthInputConfig,
  StsAuthResolvedConfig,
} from "@aws-sdk/middleware-sdk-sts";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";
import {
  AssumeRoleCommandInput,
  AssumeRoleCommandOutput,
} from "./commands/AssumeRoleCommand";
import {
  AssumeRoleWithSAMLCommandInput,
  AssumeRoleWithSAMLCommandOutput,
} from "./commands/AssumeRoleWithSAMLCommand";
import {
  AssumeRoleWithWebIdentityCommandInput,
  AssumeRoleWithWebIdentityCommandOutput,
} from "./commands/AssumeRoleWithWebIdentityCommand";
import {
  DecodeAuthorizationMessageCommandInput,
  DecodeAuthorizationMessageCommandOutput,
} from "./commands/DecodeAuthorizationMessageCommand";
import {
  GetAccessKeyInfoCommandInput,
  GetAccessKeyInfoCommandOutput,
} from "./commands/GetAccessKeyInfoCommand";
import {
  GetCallerIdentityCommandInput,
  GetCallerIdentityCommandOutput,
} from "./commands/GetCallerIdentityCommand";
import {
  GetFederationTokenCommandInput,
  GetFederationTokenCommandOutput,
} from "./commands/GetFederationTokenCommand";
import {
  GetSessionTokenCommandInput,
  GetSessionTokenCommandOutput,
} from "./commands/GetSessionTokenCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
} from "./endpoint/EndpointParameters";
export declare type ServiceInputTypes =
  | AssumeRoleCommandInput
  | AssumeRoleWithSAMLCommandInput
  | AssumeRoleWithWebIdentityCommandInput
  | DecodeAuthorizationMessageCommandInput
  | GetAccessKeyInfoCommandInput
  | GetCallerIdentityCommandInput
  | GetFederationTokenCommandInput
  | GetSessionTokenCommandInput;
export declare type ServiceOutputTypes =
  | AssumeRoleCommandOutput
  | AssumeRoleWithSAMLCommandOutput
  | AssumeRoleWithWebIdentityCommandOutput
  | DecodeAuthorizationMessageCommandOutput
  | GetAccessKeyInfoCommandOutput
  | GetCallerIdentityCommandOutput
  | GetFederationTokenCommandOutput
  | GetSessionTokenCommandOutput;
export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  requestHandler?: __HttpHandler;
  sha256?: __ChecksumConstructor | __HashConstructor;
  urlParser?: __UrlParser;
  bodyLengthChecker?: __BodyLengthCalculator;
  streamCollector?: __StreamCollector;
  base64Decoder?: __Decoder;
  base64Encoder?: __Encoder;
  utf8Decoder?: __Decoder;
  utf8Encoder?: __Encoder;
  runtime?: string;
  disableHostPrefix?: boolean;
  serviceId?: string;
  useDualstackEndpoint?: boolean | __Provider<boolean>;
  useFipsEndpoint?: boolean | __Provider<boolean>;
  region?: string | __Provider<string>;
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;
  defaultUserAgentProvider?: Provider<__UserAgent>;
  maxAttempts?: number | __Provider<number>;
  retryMode?: string | __Provider<string>;
  logger?: __Logger;
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}
declare type STSClientConfigType = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  StsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
export interface STSClientConfig extends STSClientConfigType {}
declare type STSClientResolvedConfigType =
  __SmithyResolvedConfiguration<__HttpHandlerOptions> &
    Required<ClientDefaults> &
    RegionResolvedConfig &
    EndpointResolvedConfig<EndpointParameters> &
    RetryResolvedConfig &
    HostHeaderResolvedConfig &
    StsAuthResolvedConfig &
    UserAgentResolvedConfig &
    ClientResolvedEndpointParameters;
export interface STSClientResolvedConfig extends STSClientResolvedConfigType {}
export declare class STSClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  STSClientResolvedConfig
> {
  readonly config: STSClientResolvedConfig;
  constructor(configuration: STSClientConfig);
  destroy(): void;
}
export {};
