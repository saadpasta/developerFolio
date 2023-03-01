import { fromStatic as convertToProvider } from "@aws-sdk/property-provider";
const isFunction = (func) => typeof func === "function";
export const fromStatic = (defaultValue) => isFunction(defaultValue) ? async () => await defaultValue() : convertToProvider(defaultValue);
