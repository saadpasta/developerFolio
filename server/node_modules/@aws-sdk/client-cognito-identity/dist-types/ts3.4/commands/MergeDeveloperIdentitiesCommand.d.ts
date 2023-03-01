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
  MergeDeveloperIdentitiesInput,
  MergeDeveloperIdentitiesResponse,
} from "../models/models_0";
export interface MergeDeveloperIdentitiesCommandInput
  extends MergeDeveloperIdentitiesInput {}
export interface MergeDeveloperIdentitiesCommandOutput
  extends MergeDeveloperIdentitiesResponse,
    __MetadataBearer {}
export declare class MergeDeveloperIdentitiesCommand extends $Command<
  MergeDeveloperIdentitiesCommandInput,
  MergeDeveloperIdentitiesCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  readonly input: MergeDeveloperIdentitiesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: MergeDeveloperIdentitiesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    MergeDeveloperIdentitiesCommandInput,
    MergeDeveloperIdentitiesCommandOutput
  >;
  private serialize;
  private deserialize;
}
