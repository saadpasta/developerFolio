import { EndpointParameters, SerializeMiddleware } from "@aws-sdk/types";
import { EndpointResolvedConfig } from "./resolveEndpointConfig";
import { EndpointParameterInstructions } from "./types";
/**
 * @private
 */
export declare const endpointMiddleware: <T extends EndpointParameters>({ config, instructions, }: {
    config: EndpointResolvedConfig<T>;
    instructions: EndpointParameterInstructions;
}) => SerializeMiddleware<any, any>;
