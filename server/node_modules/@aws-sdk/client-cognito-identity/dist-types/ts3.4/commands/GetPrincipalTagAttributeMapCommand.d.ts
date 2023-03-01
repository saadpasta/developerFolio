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
  GetPrincipalTagAttributeMapInput,
  GetPrincipalTagAttributeMapResponse,
} from "../models/models_0";
export interface GetPrincipalTagAttributeMapCommandInput
  extends GetPrincipalTagAttributeMapInput {}
export interface GetPrincipalTagAttributeMapCommandOutput
  extends GetPrincipalTagAttributeMapResponse,
    __MetadataBearer {}
export declare class GetPrincipalTagAttributeMapCommand extends $Command<
  GetPrincipalTagAttributeMapCommandInput,
  GetPrincipalTagAttributeMapCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  readonly input: GetPrincipalTagAttributeMapCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetPrincipalTagAttributeMapCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetPrincipalTagAttributeMapCommandInput,
    GetPrincipalTagAttributeMapCommandOutput
  >;
  private serialize;
  private deserialize;
}
