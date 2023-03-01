import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import {
  RegisterClientRequest,
  RegisterClientResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSOOIDCClientResolvedConfig,
} from "../SSOOIDCClient";
export interface RegisterClientCommandInput extends RegisterClientRequest {}
export interface RegisterClientCommandOutput
  extends RegisterClientResponse,
    __MetadataBearer {}
export declare class RegisterClientCommand extends $Command<
  RegisterClientCommandInput,
  RegisterClientCommandOutput,
  SSOOIDCClientResolvedConfig
> {
  readonly input: RegisterClientCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: RegisterClientCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOOIDCClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterClientCommandInput, RegisterClientCommandOutput>;
  private serialize;
  private deserialize;
}
