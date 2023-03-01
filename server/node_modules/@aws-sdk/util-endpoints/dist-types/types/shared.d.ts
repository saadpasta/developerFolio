import { Logger } from "@aws-sdk/types";
export declare type ReferenceObject = {
    ref: string;
};
export declare type FunctionObject = {
    fn: string;
    argv: FunctionArgv;
};
export declare type FunctionArgv = Array<Expression | boolean | number>;
export declare type FunctionReturn = string | boolean | number | {
    [key: string]: FunctionReturn;
};
export declare type ConditionObject = FunctionObject & {
    assign?: string;
};
export declare type Expression = string | ReferenceObject | FunctionObject;
export declare type EndpointParams = Record<string, string | boolean>;
export declare type EndpointResolverOptions = {
    endpointParams: EndpointParams;
    logger?: Logger;
};
export declare type ReferenceRecord = Record<string, FunctionReturn>;
export declare type EvaluateOptions = EndpointResolverOptions & {
    referenceRecord: ReferenceRecord;
};
