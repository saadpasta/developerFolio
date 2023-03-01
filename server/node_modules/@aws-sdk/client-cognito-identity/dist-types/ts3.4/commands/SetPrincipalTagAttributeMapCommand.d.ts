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
  SetPrincipalTagAttributeMapInput,
  SetPrincipalTagAttributeMapResponse,
} from "../models/models_0";
export interface SetPrincipalTagAttributeMapCommandInput
  extends SetPrincipalTagAttributeMapInput {}
export interface SetPrincipalTagAttributeMapCommandOutput
  extends SetPrincipalTagAttributeMapResponse,
    __MetadataBearer {}
export declare class SetPrincipalTagAttributeMapCommand extends $Command<
  SetPrincipalTagAttributeMapCommandInput,
  SetPrincipalTagAttributeMapCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  readonly input: SetPrincipalTagAttributeMapCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: SetPrincipalTagAttributeMapCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    SetPrincipalTagAttributeMapCommandInput,
    SetPrincipalTagAttributeMapCommandOutput
  >;
  private serialize;
  private deserialize;
}
