import { EndpointV2 } from "@aws-sdk/types";
import { EvaluateOptions, RuleSetRules } from "../types";
export declare const evaluateRules: (
  rules: RuleSetRules,
  options: EvaluateOptions
) => EndpointV2;
