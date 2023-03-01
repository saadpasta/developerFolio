import { StandardRetryBackoffStrategy, StandardRetryToken } from "@aws-sdk/types";
export interface DefaultRetryTokenOptions {
    /**
     * The total amount of retry tokens to be decremented from retry token balance.
     */
    retryCost?: number;
    /**
     * The total amount of retry tokens to be decremented from retry token balance
     * when a throttling error is encountered.
     */
    timeoutRetryCost?: number;
    /**
     *
     */
    retryBackoffStrategy?: StandardRetryBackoffStrategy;
}
export declare const getDefaultRetryToken: (initialRetryTokens: number, initialRetryDelay: number, initialRetryCount?: number | undefined, options?: DefaultRetryTokenOptions | undefined) => StandardRetryToken;
