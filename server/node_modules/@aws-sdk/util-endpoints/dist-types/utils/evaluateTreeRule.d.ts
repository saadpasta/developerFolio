import { EndpointV2 } from "@aws-sdk/types";
import { EvaluateOptions, TreeRuleObject } from "../types";
export declare const evaluateTreeRule: (treeRule: TreeRuleObject, options: EvaluateOptions) => EndpointV2 | undefined;
