import { EndpointParameters, Pluggable, RelativeMiddlewareOptions, SerializeHandlerOptions } from "@aws-sdk/types";
import { EndpointResolvedConfig } from "./resolveEndpointConfig";
import { EndpointParameterInstructions } from "./types";
export declare const endpointMiddlewareOptions: SerializeHandlerOptions & RelativeMiddlewareOptions;
export declare const getEndpointPlugin: <T extends EndpointParameters>(config: EndpointResolvedConfig<T>, instructions: EndpointParameterInstructions) => Pluggable<any, any>;
