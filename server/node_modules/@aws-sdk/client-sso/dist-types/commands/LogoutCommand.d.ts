import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LogoutRequest } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSOClientResolvedConfig } from "../SSOClient";
export interface LogoutCommandInput extends LogoutRequest {
}
export interface LogoutCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes the locally stored SSO tokens from the client-side cache and sends an API call to
 *       the IAM Identity Center service to invalidate the corresponding server-side IAM Identity Center sign in
 *       session.</p>
 *
 *          <note>
 *             <p>If a user uses IAM Identity Center to access the AWS CLI, the user’s IAM Identity Center sign in session is
 *         used to obtain an IAM session, as specified in the corresponding IAM Identity Center permission set.
 *         More specifically, IAM Identity Center assumes an IAM role in the target account on behalf of the user,
 *         and the corresponding temporary AWS credentials are returned to the client.</p>
 *
 *             <p>After user logout, any existing IAM role sessions that were created by using IAM Identity Center
 *         permission sets continue based on the duration configured in the permission set.
 *         For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/authconcept.html">User
 *           authentications</a> in the <i>IAM Identity Center User
 *         Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOClient, LogoutCommand } from "@aws-sdk/client-sso"; // ES Modules import
 * // const { SSOClient, LogoutCommand } = require("@aws-sdk/client-sso"); // CommonJS import
 * const client = new SSOClient(config);
 * const command = new LogoutCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link LogoutCommandInput} for command's `input` shape.
 * @see {@link LogoutCommandOutput} for command's `response` shape.
 * @see {@link SSOClientResolvedConfig | config} for SSOClient's `config` shape.
 *
 */
export declare class LogoutCommand extends $Command<LogoutCommandInput, LogoutCommandOutput, SSOClientResolvedConfig> {
    readonly input: LogoutCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: LogoutCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOClientResolvedConfig, options?: __HttpHandlerOptions): Handler<LogoutCommandInput, LogoutCommandOutput>;
    private serialize;
    private deserialize;
}
