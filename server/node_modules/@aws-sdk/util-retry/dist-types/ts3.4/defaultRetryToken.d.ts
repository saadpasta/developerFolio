import {
  StandardRetryBackoffStrategy,
  StandardRetryToken,
} from "@aws-sdk/types";
export interface DefaultRetryTokenOptions {
  retryCost?: number;
  timeoutRetryCost?: number;
  retryBackoffStrategy?: StandardRetryBackoffStrategy;
}
export declare const getDefaultRetryToken: (
  initialRetryTokens: number,
  initialRetryDelay: number,
  initialRetryCount?: number | undefined,
  options?: DefaultRetryTokenOptions | undefined
) => StandardRetryToken;
