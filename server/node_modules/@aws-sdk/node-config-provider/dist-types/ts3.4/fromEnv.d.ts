import { Provider } from "@aws-sdk/types";
export declare type GetterFromEnv<T> = (
  env: Record<string, string | undefined>
) => T | undefined;
export declare const fromEnv: <T = string>(
  envVarSelector: GetterFromEnv<T>
) => Provider<T>;
