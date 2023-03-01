import {
  Provider,
  RetryErrorInfo,
  RetryStrategyV2,
  RetryToken,
  StandardRetryToken,
} from "@aws-sdk/types";
import { RateLimiter } from "./types";
export interface AdaptiveRetryStrategyOptions {
  rateLimiter?: RateLimiter;
}
export declare class AdaptiveRetryStrategy implements RetryStrategyV2 {
  private readonly maxAttemptsProvider;
  private rateLimiter;
  private standardRetryStrategy;
  readonly mode: string;
  constructor(
    maxAttemptsProvider: Provider<number>,
    options?: AdaptiveRetryStrategyOptions
  );
  acquireInitialRetryToken(retryTokenScope: string): Promise<RetryToken>;
  refreshRetryTokenForRetry(
    tokenToRenew: StandardRetryToken,
    errorInfo: RetryErrorInfo
  ): Promise<RetryToken>;
  recordSuccess(token: StandardRetryToken): void;
}
