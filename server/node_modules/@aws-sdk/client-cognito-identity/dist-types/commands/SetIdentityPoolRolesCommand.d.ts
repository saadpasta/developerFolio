import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { SetIdentityPoolRolesInput } from "../models/models_0";
export interface SetIdentityPoolRolesCommandInput extends SetIdentityPoolRolesInput {
}
export interface SetIdentityPoolRolesCommandOutput extends __MetadataBearer {
}
/**
 * <p>Sets the roles for an identity pool. These roles are used when making calls to <a>GetCredentialsForIdentity</a> action.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, SetIdentityPoolRolesCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, SetIdentityPoolRolesCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new SetIdentityPoolRolesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetIdentityPoolRolesCommandInput} for command's `input` shape.
 * @see {@link SetIdentityPoolRolesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 */
export declare class SetIdentityPoolRolesCommand extends $Command<SetIdentityPoolRolesCommandInput, SetIdentityPoolRolesCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: SetIdentityPoolRolesCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: SetIdentityPoolRolesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetIdentityPoolRolesCommandInput, SetIdentityPoolRolesCommandOutput>;
    private serialize;
    private deserialize;
}
