import { EndpointV2 } from "@aws-sdk/types";
import { EndpointRuleObject, EvaluateOptions } from "../types";
export declare const evaluateEndpointRule: (endpointRule: EndpointRuleObject, options: EvaluateOptions) => EndpointV2 | undefined;
