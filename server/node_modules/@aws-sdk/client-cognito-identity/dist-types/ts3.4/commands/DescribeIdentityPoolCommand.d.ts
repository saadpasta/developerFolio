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
import { DescribeIdentityPoolInput, IdentityPool } from "../models/models_0";
export interface DescribeIdentityPoolCommandInput
  extends DescribeIdentityPoolInput {}
export interface DescribeIdentityPoolCommandOutput
  extends IdentityPool,
    __MetadataBearer {}
export declare class DescribeIdentityPoolCommand extends $Command<
  DescribeIdentityPoolCommandInput,
  DescribeIdentityPoolCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  readonly input: DescribeIdentityPoolCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeIdentityPoolCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeIdentityPoolCommandInput,
    DescribeIdentityPoolCommandOutput
  >;
  private serialize;
  private deserialize;
}
