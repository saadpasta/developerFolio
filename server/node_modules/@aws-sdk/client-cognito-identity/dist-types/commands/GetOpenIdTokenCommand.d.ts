import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { GetOpenIdTokenInput, GetOpenIdTokenResponse } from "../models/models_0";
export interface GetOpenIdTokenCommandInput extends GetOpenIdTokenInput {
}
export interface GetOpenIdTokenCommandOutput extends GetOpenIdTokenResponse, __MetadataBearer {
}
/**
 * <p>Gets an OpenID token, using a known Cognito ID. This known Cognito ID is returned by
 *             <a>GetId</a>. You can optionally add additional logins for the identity.
 *          Supplying multiple logins creates an implicit link.</p>
 *          <p>The OpenID token is valid for 10 minutes.</p>
 *          <p>This is a public API. You do not need any credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetOpenIdTokenCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, GetOpenIdTokenCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new GetOpenIdTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOpenIdTokenCommandInput} for command's `input` shape.
 * @see {@link GetOpenIdTokenCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 */
export declare class GetOpenIdTokenCommand extends $Command<GetOpenIdTokenCommandInput, GetOpenIdTokenCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: GetOpenIdTokenCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: GetOpenIdTokenCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOpenIdTokenCommandInput, GetOpenIdTokenCommandOutput>;
    private serialize;
    private deserialize;
}
