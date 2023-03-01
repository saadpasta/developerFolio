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
import { DescribeIdentityInput, IdentityDescription } from "../models/models_0";
export interface DescribeIdentityCommandInput extends DescribeIdentityInput {}
export interface DescribeIdentityCommandOutput
  extends IdentityDescription,
    __MetadataBearer {}
export declare class DescribeIdentityCommand extends $Command<
  DescribeIdentityCommandInput,
  DescribeIdentityCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  readonly input: DescribeIdentityCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeIdentityCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeIdentityCommandInput, DescribeIdentityCommandOutput>;
  private serialize;
  private deserialize;
}
