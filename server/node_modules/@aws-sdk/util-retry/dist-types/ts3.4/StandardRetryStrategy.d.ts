import {
  Provider,
  RetryErrorInfo,
  RetryStrategyV2,
  StandardRetryToken,
} from "@aws-sdk/types";
export declare class StandardRetryStrategy implements RetryStrategyV2 {
  private readonly maxAttemptsProvider;
  private retryToken;
  readonly mode: string;
  constructor(maxAttemptsProvider: Provider<number>);
  acquireInitialRetryToken(
    retryTokenScope: string
  ): Promise<StandardRetryToken>;
  refreshRetryTokenForRetry(
    tokenToRenew: StandardRetryToken,
    errorInfo: RetryErrorInfo
  ): Promise<StandardRetryToken>;
  recordSuccess(token: StandardRetryToken): void;
  private getMaxAttempts;
  private shouldRetry;
  private isRetryableError;
}
