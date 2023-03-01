import { EndpointObjectProperty } from "@aws-sdk/types";
import { ConditionObject, Expression } from "./shared";
export declare type EndpointObjectProperties = Record<
  string,
  EndpointObjectProperty
>;
export declare type EndpointObjectHeaders = Record<string, Expression[]>;
export declare type EndpointObject = {
  url: Expression;
  properties?: EndpointObjectProperties;
  headers?: EndpointObjectHeaders;
};
export declare type EndpointRuleObject = {
  type: "endpoint";
  conditions?: ConditionObject[];
  endpoint: EndpointObject;
  documentation?: string;
};
