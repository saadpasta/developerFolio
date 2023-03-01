import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { UnlinkDeveloperIdentityInput } from "../models/models_0";
export interface UnlinkDeveloperIdentityCommandInput extends UnlinkDeveloperIdentityInput {
}
export interface UnlinkDeveloperIdentityCommandOutput extends __MetadataBearer {
}
/**
 * <p>Unlinks a <code>DeveloperUserIdentifier</code> from an existing identity. Unlinked
 *          developer users will be considered new identities next time they are seen. If, for a given
 *          Cognito identity, you remove all federated identities as well as the developer user
 *          identifier, the Cognito identity becomes inaccessible.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, UnlinkDeveloperIdentityCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, UnlinkDeveloperIdentityCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new UnlinkDeveloperIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnlinkDeveloperIdentityCommandInput} for command's `input` shape.
 * @see {@link UnlinkDeveloperIdentityCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 */
export declare class UnlinkDeveloperIdentityCommand extends $Command<UnlinkDeveloperIdentityCommandInput, UnlinkDeveloperIdentityCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: UnlinkDeveloperIdentityCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: UnlinkDeveloperIdentityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnlinkDeveloperIdentityCommandInput, UnlinkDeveloperIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
