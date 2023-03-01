import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { DeleteIdentitiesInput, DeleteIdentitiesResponse } from "../models/models_0";
export interface DeleteIdentitiesCommandInput extends DeleteIdentitiesInput {
}
export interface DeleteIdentitiesCommandOutput extends DeleteIdentitiesResponse, __MetadataBearer {
}
/**
 * <p>Deletes identities from an identity pool. You can specify a list of 1-60 identities
 *          that you want to delete.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, DeleteIdentitiesCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, DeleteIdentitiesCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new DeleteIdentitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIdentitiesCommandInput} for command's `input` shape.
 * @see {@link DeleteIdentitiesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 */
export declare class DeleteIdentitiesCommand extends $Command<DeleteIdentitiesCommandInput, DeleteIdentitiesCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: DeleteIdentitiesCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: DeleteIdentitiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteIdentitiesCommandInput, DeleteIdentitiesCommandOutput>;
    private serialize;
    private deserialize;
}
