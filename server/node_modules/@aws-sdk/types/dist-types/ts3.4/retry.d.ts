export declare type RetryErrorType =
  | "TRANSIENT"
  | "THROTTLING"
  | "SERVER_ERROR"
  | "CLIENT_ERROR";
export interface RetryErrorInfo {
  errorType: RetryErrorType;
  retryAfterHint?: Date;
}
export interface RetryBackoffStrategy {
  computeNextBackoffDelay(retryAttempt: number): number;
}
export interface StandardRetryBackoffStrategy extends RetryBackoffStrategy {
  setDelayBase(delayBase: number): void;
}
export interface RetryStrategyOptions {
  backoffStrategy: RetryBackoffStrategy;
  maxRetriesBase: number;
}
export interface RetryToken {
  getRetryCount(): number;
  getRetryDelay(): number;
}
export interface StandardRetryToken extends RetryToken {
  hasRetryTokens(errorType: RetryErrorType): boolean;
  getRetryTokenCount(errorInfo: RetryErrorInfo): number;
  getLastRetryCost(): number | undefined;
  releaseRetryTokens(amount?: number): void;
}
export interface RetryStrategyV2 {
  acquireInitialRetryToken(retryTokenScope: string): Promise<RetryToken>;
  refreshRetryTokenForRetry(
    tokenToRenew: RetryToken,
    errorInfo: RetryErrorInfo
  ): Promise<RetryToken>;
  recordSuccess(token: RetryToken): void;
}
export declare type ExponentialBackoffJitterType =
  | "DEFAULT"
  | "NONE"
  | "FULL"
  | "DECORRELATED";
export interface ExponentialBackoffStrategyOptions {
  jitterType: ExponentialBackoffJitterType;
  backoffScaleValue?: number;
}
