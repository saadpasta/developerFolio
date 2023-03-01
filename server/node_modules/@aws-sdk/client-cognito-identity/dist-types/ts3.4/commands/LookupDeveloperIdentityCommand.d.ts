import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import {
  CognitoIdentityClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityClient";
import {
  LookupDeveloperIdentityInput,
  LookupDeveloperIdentityResponse,
} from "../models/models_0";
export interface LookupDeveloperIdentityCommandInput
  extends LookupDeveloperIdentityInput {}
export interface LookupDeveloperIdentityCommandOutput
  extends LookupDeveloperIdentityResponse,
    __MetadataBearer {}
export declare class LookupDeveloperIdentityCommand extends $Command<
  LookupDeveloperIdentityCommandInput,
  LookupDeveloperIdentityCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  readonly input: LookupDeveloperIdentityCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: LookupDeveloperIdentityCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    LookupDeveloperIdentityCommandInput,
    LookupDeveloperIdentityCommandOutput
  >;
  private serialize;
  private deserialize;
}
