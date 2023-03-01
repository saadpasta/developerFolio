import { RuleSetRules } from "./TreeRuleObject";
export declare type DeprecatedObject = {
  message?: string;
  since?: string;
};
export declare type ParameterObject = {
  type: "String" | "Boolean";
  default?: string | boolean;
  required?: boolean;
  documentation?: string;
  builtIn?: string;
  deprecated?: DeprecatedObject;
};
export declare type RuleSetObject = {
  version: string;
  serviceId?: string;
  parameters: Record<string, ParameterObject>;
  rules: RuleSetRules;
};
