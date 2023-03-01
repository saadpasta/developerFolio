import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { CreateTokenRequest, CreateTokenResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSOOIDCClientResolvedConfig } from "../SSOOIDCClient";
export interface CreateTokenCommandInput extends CreateTokenRequest {
}
export interface CreateTokenCommandOutput extends CreateTokenResponse, __MetadataBearer {
}
/**
 * <p>Creates and returns an access token for the authorized client. The access token issued
 *       will be used to fetch short-term credentials for the assigned roles in the AWS
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOOIDCClient, CreateTokenCommand } from "@aws-sdk/client-sso-oidc"; // ES Modules import
 * // const { SSOOIDCClient, CreateTokenCommand } = require("@aws-sdk/client-sso-oidc"); // CommonJS import
 * const client = new SSOOIDCClient(config);
 * const command = new CreateTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTokenCommandInput} for command's `input` shape.
 * @see {@link CreateTokenCommandOutput} for command's `response` shape.
 * @see {@link SSOOIDCClientResolvedConfig | config} for SSOOIDCClient's `config` shape.
 *
 */
export declare class CreateTokenCommand extends $Command<CreateTokenCommandInput, CreateTokenCommandOutput, SSOOIDCClientResolvedConfig> {
    readonly input: CreateTokenCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: CreateTokenCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOOIDCClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTokenCommandInput, CreateTokenCommandOutput>;
    private serialize;
    private deserialize;
}
