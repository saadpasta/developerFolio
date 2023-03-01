export declare type ObjectMappingInstructions = Record<
  string,
  ObjectMappingInstruction
>;
export declare type ObjectMappingInstruction =
  | LazyValueInstruction
  | ConditionalLazyValueInstruction
  | SimpleValueInstruction
  | ConditionalValueInstruction
  | UnfilteredValue;
export declare type UnfilteredValue = any;
export declare type LazyValueInstruction = [FilterStatus, ValueSupplier];
export declare type ConditionalLazyValueInstruction = [
  FilterStatusSupplier,
  ValueSupplier
];
export declare type SimpleValueInstruction = [FilterStatus, Value];
export declare type ConditionalValueInstruction = [
  ValueFilteringFunction,
  Value
];
export declare type FilterStatus = boolean | unknown | void;
export declare type FilterStatusSupplier = () => boolean;
export declare type ValueFilteringFunction = (value: any) => boolean;
export declare type ValueSupplier = () => any;
export declare type Value = any;
export declare function map(
  target: any,
  filter: (value: any) => boolean,
  instructions: Record<string, ValueSupplier | Value>
): typeof target;
export declare function map(
  instructions: Record<string, ObjectMappingInstruction>
): any;
export declare function map(
  target: any,
  instructions: Record<string, ObjectMappingInstruction>
): typeof target;
export declare const convertMap: (target: any) => Record<string, any>;
