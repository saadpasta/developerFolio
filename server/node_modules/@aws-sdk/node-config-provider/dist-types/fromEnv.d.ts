import { Provider } from "@aws-sdk/types";
export declare type GetterFromEnv<T> = (env: Record<string, string | undefined>) => T | undefined;
/**
 * Get config value given the environment variable name or getter from
 * environment variable.
 */
export declare const fromEnv: <T = string>(envVarSelector: GetterFromEnv<T>) => Provider<T>;
