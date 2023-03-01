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
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
} from "@aws-sdk/middleware-signing";
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
  CreateIdentityPoolCommandInput,
  CreateIdentityPoolCommandOutput,
} from "./commands/CreateIdentityPoolCommand";
import {
  DeleteIdentitiesCommandInput,
  DeleteIdentitiesCommandOutput,
} from "./commands/DeleteIdentitiesCommand";
import {
  DeleteIdentityPoolCommandInput,
  DeleteIdentityPoolCommandOutput,
} from "./commands/DeleteIdentityPoolCommand";
import {
  DescribeIdentityCommandInput,
  DescribeIdentityCommandOutput,
} from "./commands/DescribeIdentityCommand";
import {
  DescribeIdentityPoolCommandInput,
  DescribeIdentityPoolCommandOutput,
} from "./commands/DescribeIdentityPoolCommand";
import {
  GetCredentialsForIdentityCommandInput,
  GetCredentialsForIdentityCommandOutput,
} from "./commands/GetCredentialsForIdentityCommand";
import { GetIdCommandInput, GetIdCommandOutput } from "./commands/GetIdCommand";
import {
  GetIdentityPoolRolesCommandInput,
  GetIdentityPoolRolesCommandOutput,
} from "./commands/GetIdentityPoolRolesCommand";
import {
  GetOpenIdTokenCommandInput,
  GetOpenIdTokenCommandOutput,
} from "./commands/GetOpenIdTokenCommand";
import {
  GetOpenIdTokenForDeveloperIdentityCommandInput,
  GetOpenIdTokenForDeveloperIdentityCommandOutput,
} from "./commands/GetOpenIdTokenForDeveloperIdentityCommand";
import {
  GetPrincipalTagAttributeMapCommandInput,
  GetPrincipalTagAttributeMapCommandOutput,
} from "./commands/GetPrincipalTagAttributeMapCommand";
import {
  ListIdentitiesCommandInput,
  ListIdentitiesCommandOutput,
} from "./commands/ListIdentitiesCommand";
import {
  ListIdentityPoolsCommandInput,
  ListIdentityPoolsCommandOutput,
} from "./commands/ListIdentityPoolsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  LookupDeveloperIdentityCommandInput,
  LookupDeveloperIdentityCommandOutput,
} from "./commands/LookupDeveloperIdentityCommand";
import {
  MergeDeveloperIdentitiesCommandInput,
  MergeDeveloperIdentitiesCommandOutput,
} from "./commands/MergeDeveloperIdentitiesCommand";
import {
  SetIdentityPoolRolesCommandInput,
  SetIdentityPoolRolesCommandOutput,
} from "./commands/SetIdentityPoolRolesCommand";
import {
  SetPrincipalTagAttributeMapCommandInput,
  SetPrincipalTagAttributeMapCommandOutput,
} from "./commands/SetPrincipalTagAttributeMapCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput,
} from "./commands/TagResourceCommand";
import {
  UnlinkDeveloperIdentityCommandInput,
  UnlinkDeveloperIdentityCommandOutput,
} from "./commands/UnlinkDeveloperIdentityCommand";
import {
  UnlinkIdentityCommandInput,
  UnlinkIdentityCommandOutput,
} from "./commands/UnlinkIdentityCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateIdentityPoolCommandInput,
  UpdateIdentityPoolCommandOutput,
} from "./commands/UpdateIdentityPoolCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
} from "./endpoint/EndpointParameters";
export declare type ServiceInputTypes =
  | CreateIdentityPoolCommandInput
  | DeleteIdentitiesCommandInput
  | DeleteIdentityPoolCommandInput
  | DescribeIdentityCommandInput
  | DescribeIdentityPoolCommandInput
  | GetCredentialsForIdentityCommandInput
  | GetIdCommandInput
  | GetIdentityPoolRolesCommandInput
  | GetOpenIdTokenCommandInput
  | GetOpenIdTokenForDeveloperIdentityCommandInput
  | GetPrincipalTagAttributeMapCommandInput
  | ListIdentitiesCommandInput
  | ListIdentityPoolsCommandInput
  | ListTagsForResourceCommandInput
  | LookupDeveloperIdentityCommandInput
  | MergeDeveloperIdentitiesCommandInput
  | SetIdentityPoolRolesCommandInput
  | SetPrincipalTagAttributeMapCommandInput
  | TagResourceCommandInput
  | UnlinkDeveloperIdentityCommandInput
  | UnlinkIdentityCommandInput
  | UntagResourceCommandInput
  | UpdateIdentityPoolCommandInput;
export declare type ServiceOutputTypes =
  | CreateIdentityPoolCommandOutput
  | DeleteIdentitiesCommandOutput
  | DeleteIdentityPoolCommandOutput
  | DescribeIdentityCommandOutput
  | DescribeIdentityPoolCommandOutput
  | GetCredentialsForIdentityCommandOutput
  | GetIdCommandOutput
  | GetIdentityPoolRolesCommandOutput
  | GetOpenIdTokenCommandOutput
  | GetOpenIdTokenForDeveloperIdentityCommandOutput
  | GetPrincipalTagAttributeMapCommandOutput
  | ListIdentitiesCommandOutput
  | ListIdentityPoolsCommandOutput
  | ListTagsForResourceCommandOutput
  | LookupDeveloperIdentityCommandOutput
  | MergeDeveloperIdentitiesCommandOutput
  | SetIdentityPoolRolesCommandOutput
  | SetPrincipalTagAttributeMapCommandOutput
  | TagResourceCommandOutput
  | UnlinkDeveloperIdentityCommandOutput
  | UnlinkIdentityCommandOutput
  | UntagResourceCommandOutput
  | UpdateIdentityPoolCommandOutput;
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
declare type CognitoIdentityClientConfigType = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
export interface CognitoIdentityClientConfig
  extends CognitoIdentityClientConfigType {}
declare type CognitoIdentityClientResolvedConfigType =
  __SmithyResolvedConfiguration<__HttpHandlerOptions> &
    Required<ClientDefaults> &
    RegionResolvedConfig &
    EndpointResolvedConfig<EndpointParameters> &
    RetryResolvedConfig &
    HostHeaderResolvedConfig &
    AwsAuthResolvedConfig &
    UserAgentResolvedConfig &
    ClientResolvedEndpointParameters;
export interface CognitoIdentityClientResolvedConfig
  extends CognitoIdentityClientResolvedConfigType {}
export declare class CognitoIdentityClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CognitoIdentityClientResolvedConfig
> {
  readonly config: CognitoIdentityClientResolvedConfig;
  constructor(configuration: CognitoIdentityClientConfig);
  destroy(): void;
}
export {};
