import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { CreateIdentityPoolInput, IdentityPool } from "../models/models_0";
export interface CreateIdentityPoolCommandInput extends CreateIdentityPoolInput {
}
export interface CreateIdentityPoolCommandOutput extends IdentityPool, __MetadataBearer {
}
/**
 * <p>Creates a new identity pool. The identity pool is a store of user identity
 *          information that is specific to your AWS account. The keys for <code>SupportedLoginProviders</code> are as follows:</p>
 *
 *          <ul>
 *             <li>
 *                <p>Facebook: <code>graph.facebook.com</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Google: <code>accounts.google.com</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Amazon: <code>www.amazon.com</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Twitter: <code>api.twitter.com</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Digits: <code>www.digits.com</code>
 *                </p>
 *             </li>
 *          </ul>
 *
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, CreateIdentityPoolCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, CreateIdentityPoolCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new CreateIdentityPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIdentityPoolCommandInput} for command's `input` shape.
 * @see {@link CreateIdentityPoolCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 */
export declare class CreateIdentityPoolCommand extends $Command<CreateIdentityPoolCommandInput, CreateIdentityPoolCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: CreateIdentityPoolCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: CreateIdentityPoolCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateIdentityPoolCommandInput, CreateIdentityPoolCommandOutput>;
    private serialize;
    private deserialize;
}
