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
  CreateTokenCommandInput,
  CreateTokenCommandOutput,
} from "./commands/CreateTokenCommand";
import {
  RegisterClientCommandInput,
  RegisterClientCommandOutput,
} from "./commands/RegisterClientCommand";
import {
  StartDeviceAuthorizationCommandInput,
  StartDeviceAuthorizationCommandOutput,
} from "./commands/StartDeviceAuthorizationCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
} from "./endpoint/EndpointParameters";
export declare type ServiceInputTypes =
  | CreateTokenCommandInput
  | RegisterClientCommandInput
  | StartDeviceAuthorizationCommandInput;
export declare type ServiceOutputTypes =
  | CreateTokenCommandOutput
  | RegisterClientCommandOutput
  | StartDeviceAuthorizationCommandOutput;
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
  defaultUserAgentProvider?: Provider<__UserAgent>;
  maxAttempts?: number | __Provider<number>;
  retryMode?: string | __Provider<string>;
  logger?: __Logger;
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}
declare type SSOOIDCClientConfigType = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
export interface SSOOIDCClientConfig extends SSOOIDCClientConfigType {}
declare type SSOOIDCClientResolvedConfigType =
  __SmithyResolvedConfiguration<__HttpHandlerOptions> &
    Required<ClientDefaults> &
    RegionResolvedConfig &
    EndpointResolvedConfig<EndpointParameters> &
    RetryResolvedConfig &
    HostHeaderResolvedConfig &
    UserAgentResolvedConfig &
    ClientResolvedEndpointParameters;
export interface SSOOIDCClientResolvedConfig
  extends SSOOIDCClientResolvedConfigType {}
export declare class SSOOIDCClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SSOOIDCClientResolvedConfig
> {
  readonly config: SSOOIDCClientResolvedConfig;
  constructor(configuration: SSOOIDCClientConfig);
  destroy(): void;
}
export {};
