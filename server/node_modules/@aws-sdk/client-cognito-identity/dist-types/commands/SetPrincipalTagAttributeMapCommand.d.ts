import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { SetPrincipalTagAttributeMapInput, SetPrincipalTagAttributeMapResponse } from "../models/models_0";
export interface SetPrincipalTagAttributeMapCommandInput extends SetPrincipalTagAttributeMapInput {
}
export interface SetPrincipalTagAttributeMapCommandOutput extends SetPrincipalTagAttributeMapResponse, __MetadataBearer {
}
/**
 * <p>You can use this operation to use default (username and clientID) attribute or custom attribute mappings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, SetPrincipalTagAttributeMapCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, SetPrincipalTagAttributeMapCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new SetPrincipalTagAttributeMapCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetPrincipalTagAttributeMapCommandInput} for command's `input` shape.
 * @see {@link SetPrincipalTagAttributeMapCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 */
export declare class SetPrincipalTagAttributeMapCommand extends $Command<SetPrincipalTagAttributeMapCommandInput, SetPrincipalTagAttributeMapCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: SetPrincipalTagAttributeMapCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: SetPrincipalTagAttributeMapCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetPrincipalTagAttributeMapCommandInput, SetPrincipalTagAttributeMapCommandOutput>;
    private serialize;
    private deserialize;
}
