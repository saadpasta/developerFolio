import { Endpoint, EndpointV2 } from "@aws-sdk/types";
export declare const toEndpointV1: (endpoint: string | Endpoint | EndpointV2) => Endpoint;
