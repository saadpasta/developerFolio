import { ConditionObject, Expression } from "./shared";
export declare type ErrorRuleObject = {
  type: "error";
  conditions?: ConditionObject[];
  error: Expression;
  documentation?: string;
};
