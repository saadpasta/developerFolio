import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { DescribeIdentityPoolInput, IdentityPool } from "../models/models_0";
export interface DescribeIdentityPoolCommandInput extends DescribeIdentityPoolInput {
}
export interface DescribeIdentityPoolCommandOutput extends IdentityPool, __MetadataBearer {
}
/**
 * <p>Gets details about a particular identity pool, including the pool name, ID
 *          description, creation date, and current number of users.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, DescribeIdentityPoolCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, DescribeIdentityPoolCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new DescribeIdentityPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIdentityPoolCommandInput} for command's `input` shape.
 * @see {@link DescribeIdentityPoolCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 */
export declare class DescribeIdentityPoolCommand extends $Command<DescribeIdentityPoolCommandInput, DescribeIdentityPoolCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: DescribeIdentityPoolCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: DescribeIdentityPoolCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeIdentityPoolCommandInput, DescribeIdentityPoolCommandOutput>;
    private serialize;
    private deserialize;
}
