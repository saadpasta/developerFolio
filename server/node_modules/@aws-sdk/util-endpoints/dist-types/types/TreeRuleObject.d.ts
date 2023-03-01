import { EndpointRuleObject } from "./EndpointRuleObject";
import { ErrorRuleObject } from "./ErrorRuleObject";
import { ConditionObject } from "./shared";
export declare type RuleSetRules = Array<EndpointRuleObject | ErrorRuleObject | TreeRuleObject>;
export declare type TreeRuleObject = {
    type: "tree";
    conditions?: ConditionObject[];
    rules: RuleSetRules;
    documentation?: string;
};
