import { Provider } from "@aws-sdk/types";
/**
 * @returns a provider function for the input value if it isn't already one.
 */
export declare const normalizeProvider: <T>(input: T | Provider<T>) => Provider<T>;
