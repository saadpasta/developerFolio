import { EndpointV2, Logger } from "@aws-sdk/types";
import { EndpointParameters } from "./EndpointParameters";
export declare const defaultEndpointResolver: (endpointParams: EndpointParameters, context?: {
    logger?: Logger;
}) => EndpointV2;
