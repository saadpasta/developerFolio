import { EndpointV2 } from "@aws-sdk/types";
import { EndpointResolverOptions, RuleSetObject } from "./types";
export declare const resolveEndpoint: (
  ruleSetObject: RuleSetObject,
  options: EndpointResolverOptions
) => EndpointV2;
