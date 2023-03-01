import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { IdentityPool } from "../models/models_0";
export interface UpdateIdentityPoolCommandInput extends IdentityPool {
}
export interface UpdateIdentityPoolCommandOutput extends IdentityPool, __MetadataBearer {
}
/**
 * <p>Updates an identity pool.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, UpdateIdentityPoolCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, UpdateIdentityPoolCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new UpdateIdentityPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIdentityPoolCommandInput} for command's `input` shape.
 * @see {@link UpdateIdentityPoolCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 */
export declare class UpdateIdentityPoolCommand extends $Command<UpdateIdentityPoolCommandInput, UpdateIdentityPoolCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: UpdateIdentityPoolCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: UpdateIdentityPoolCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateIdentityPoolCommandInput, UpdateIdentityPoolCommandOutput>;
    private serialize;
    private deserialize;
}
