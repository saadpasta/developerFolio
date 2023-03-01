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
  GetCredentialsForIdentityInput,
  GetCredentialsForIdentityResponse,
} from "../models/models_0";
export interface GetCredentialsForIdentityCommandInput
  extends GetCredentialsForIdentityInput {}
export interface GetCredentialsForIdentityCommandOutput
  extends GetCredentialsForIdentityResponse,
    __MetadataBearer {}
export declare class GetCredentialsForIdentityCommand extends $Command<
  GetCredentialsForIdentityCommandInput,
  GetCredentialsForIdentityCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  readonly input: GetCredentialsForIdentityCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetCredentialsForIdentityCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetCredentialsForIdentityCommandInput,
    GetCredentialsForIdentityCommandOutput
  >;
  private serialize;
  private deserialize;
}
