import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import {
  StartDeviceAuthorizationRequest,
  StartDeviceAuthorizationResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSOOIDCClientResolvedConfig,
} from "../SSOOIDCClient";
export interface StartDeviceAuthorizationCommandInput
  extends StartDeviceAuthorizationRequest {}
export interface StartDeviceAuthorizationCommandOutput
  extends StartDeviceAuthorizationResponse,
    __MetadataBearer {}
export declare class StartDeviceAuthorizationCommand extends $Command<
  StartDeviceAuthorizationCommandInput,
  StartDeviceAuthorizationCommandOutput,
  SSOOIDCClientResolvedConfig
> {
  readonly input: StartDeviceAuthorizationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: StartDeviceAuthorizationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOOIDCClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    StartDeviceAuthorizationCommandInput,
    StartDeviceAuthorizationCommandOutput
  >;
  private serialize;
  private deserialize;
}
