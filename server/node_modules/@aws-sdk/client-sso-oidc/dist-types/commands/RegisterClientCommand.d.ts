import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { RegisterClientRequest, RegisterClientResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSOOIDCClientResolvedConfig } from "../SSOOIDCClient";
export interface RegisterClientCommandInput extends RegisterClientRequest {
}
export interface RegisterClientCommandOutput extends RegisterClientResponse, __MetadataBearer {
}
/**
 * <p>Registers a client with IAM Identity Center. This allows clients to initiate device authorization.
 *       The output should be persisted for reuse through many authentication requests.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOOIDCClient, RegisterClientCommand } from "@aws-sdk/client-sso-oidc"; // ES Modules import
 * // const { SSOOIDCClient, RegisterClientCommand } = require("@aws-sdk/client-sso-oidc"); // CommonJS import
 * const client = new SSOOIDCClient(config);
 * const command = new RegisterClientCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterClientCommandInput} for command's `input` shape.
 * @see {@link RegisterClientCommandOutput} for command's `response` shape.
 * @see {@link SSOOIDCClientResolvedConfig | config} for SSOOIDCClient's `config` shape.
 *
 */
export declare class RegisterClientCommand extends $Command<RegisterClientCommandInput, RegisterClientCommandOutput, SSOOIDCClientResolvedConfig> {
    readonly input: RegisterClientCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: RegisterClientCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOOIDCClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterClientCommandInput, RegisterClientCommandOutput>;
    private serialize;
    private deserialize;
}
