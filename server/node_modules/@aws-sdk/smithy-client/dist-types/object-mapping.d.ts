/**
 * A set of instructions for multiple keys.
 * The aim is to provide a concise yet readable way to map and filter values
 * onto a target object.
 *
 * @example
 * ```javascript
 * const example: ObjectMappingInstructions = {
 *   lazyValue1: [, () => 1],
 *   lazyValue2: [, () => 2],
 *   lazyValue3: [, () => 3],
 *   lazyConditionalValue1: [() => true, () => 4],
 *   lazyConditionalValue2: [() => true, () => 5],
 *   lazyConditionalValue3: [true, () => 6],
 *   lazyConditionalValue4: [false, () => 44],
 *   lazyConditionalValue5: [() => false, () => 55],
 *   lazyConditionalValue6: ["", () => 66],
 *   simpleValue1: [, 7],
 *   simpleValue2: [, 8],
 *   simpleValue3: [, 9],
 *   conditionalValue1: [() => true, 10],
 *   conditionalValue2: [() => true, 11],
 *   conditionalValue3: [{}, 12],
 *   conditionalValue4: [false, 110],
 *   conditionalValue5: [() => false, 121],
 *   conditionalValue6: ["", 132],
 * };
 *
 * const exampleResult: Record<string, any> = {
 *   lazyValue1: 1,
 *   lazyValue2: 2,
 *   lazyValue3: 3,
 *   lazyConditionalValue1: 4,
 *   lazyConditionalValue2: 5,
 *   lazyConditionalValue3: 6,
 *   simpleValue1: 7,
 *   simpleValue2: 8,
 *   simpleValue3: 9,
 *   conditionalValue1: 10,
 *   conditionalValue2: 11,
 *   conditionalValue3: 12,
 * };
 * ```
 */
export declare type ObjectMappingInstructions = Record<string, ObjectMappingInstruction>;
/**
 * An instruction set for assigning a value to a target object.
 */
export declare type ObjectMappingInstruction = LazyValueInstruction | ConditionalLazyValueInstruction | SimpleValueInstruction | ConditionalValueInstruction | UnfilteredValue;
/**
 * non-array
 */
export declare type UnfilteredValue = any;
export declare type LazyValueInstruction = [FilterStatus, ValueSupplier];
export declare type ConditionalLazyValueInstruction = [FilterStatusSupplier, ValueSupplier];
export declare type SimpleValueInstruction = [FilterStatus, Value];
export declare type ConditionalValueInstruction = [ValueFilteringFunction, Value];
/**
 * Filter is considered passed if
 * 1. It is a boolean true.
 * 2. It is not undefined and is itself truthy.
 * 3. It is undefined and the corresponding _value_ is neither null nor undefined.
 */
export declare type FilterStatus = boolean | unknown | void;
/**
 * Supplies the filter check but not against any value as input.
 */
export declare type FilterStatusSupplier = () => boolean;
/**
 * Filter check with the given value.
 */
export declare type ValueFilteringFunction = (value: any) => boolean;
/**
 * Supplies the value for lazy evaluation.
 */
export declare type ValueSupplier = () => any;
/**
 * A non-function value.
 */
export declare type Value = any;
/**
 * Internal/Private, for codegen use only.
 *
 * Transfer a set of keys from [instructions] to [target].
 *
 * For each instruction in the record, the target key will be the instruction key.
 * The target assignment will be conditional on the instruction's filter.
 * The target assigned value will be supplied by the instructions as an evaluable function or non-function value.
 *
 * @see ObjectMappingInstructions for an example.
 * @private
 * @internal
 */
export declare function map(target: any, filter: (value: any) => boolean, instructions: Record<string, ValueSupplier | Value>): typeof target;
export declare function map(instructions: Record<string, ObjectMappingInstruction>): any;
export declare function map(target: any, instructions: Record<string, ObjectMappingInstruction>): typeof target;
/**
 * Convert a regular object { k: v } to { k: [, v] } mapping instruction set with default
 * filter.
 *
 * @private
 * @internal
 */
export declare const convertMap: (target: any) => Record<string, any>;
