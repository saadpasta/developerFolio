import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { GetOpenIdTokenForDeveloperIdentityInput, GetOpenIdTokenForDeveloperIdentityResponse } from "../models/models_0";
export interface GetOpenIdTokenForDeveloperIdentityCommandInput extends GetOpenIdTokenForDeveloperIdentityInput {
}
export interface GetOpenIdTokenForDeveloperIdentityCommandOutput extends GetOpenIdTokenForDeveloperIdentityResponse, __MetadataBearer {
}
/**
 * <p>Registers (or retrieves) a Cognito <code>IdentityId</code> and an OpenID Connect
 *          token for a user authenticated by your backend authentication process. Supplying multiple
 *          logins will create an implicit linked account. You can only specify one developer provider
 *          as part of the <code>Logins</code> map, which is linked to the identity pool. The developer
 *          provider is the "domain" by which Cognito will refer to your users.</p>
 *          <p>You can use <code>GetOpenIdTokenForDeveloperIdentity</code> to create a new identity
 *          and to link new logins (that is, user credentials issued by a public provider or developer
 *          provider) to an existing identity. When you want to create a new identity, the
 *             <code>IdentityId</code> should be null. When you want to associate a new login with an
 *          existing authenticated/unauthenticated identity, you can do so by providing the existing
 *             <code>IdentityId</code>. This API will create the identity in the specified
 *             <code>IdentityPoolId</code>.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetOpenIdTokenForDeveloperIdentityCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, GetOpenIdTokenForDeveloperIdentityCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new GetOpenIdTokenForDeveloperIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOpenIdTokenForDeveloperIdentityCommandInput} for command's `input` shape.
 * @see {@link GetOpenIdTokenForDeveloperIdentityCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 */
export declare class GetOpenIdTokenForDeveloperIdentityCommand extends $Command<GetOpenIdTokenForDeveloperIdentityCommandInput, GetOpenIdTokenForDeveloperIdentityCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: GetOpenIdTokenForDeveloperIdentityCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: GetOpenIdTokenForDeveloperIdentityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOpenIdTokenForDeveloperIdentityCommandInput, GetOpenIdTokenForDeveloperIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
