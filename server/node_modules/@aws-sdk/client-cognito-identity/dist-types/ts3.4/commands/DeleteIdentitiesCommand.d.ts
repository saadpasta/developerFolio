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
  DeleteIdentitiesInput,
  DeleteIdentitiesResponse,
} from "../models/models_0";
export interface DeleteIdentitiesCommandInput extends DeleteIdentitiesInput {}
export interface DeleteIdentitiesCommandOutput
  extends DeleteIdentitiesResponse,
    __MetadataBearer {}
export declare class DeleteIdentitiesCommand extends $Command<
  DeleteIdentitiesCommandInput,
  DeleteIdentitiesCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  readonly input: DeleteIdentitiesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteIdentitiesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteIdentitiesCommandInput, DeleteIdentitiesCommandOutput>;
  private serialize;
  private deserialize;
}
