import { DEFAULT_MAX_ATTEMPTS, RETRY_MODES } from "./config";
import { DEFAULT_RETRY_DELAY_BASE, INITIAL_RETRY_TOKENS } from "./constants";
import { getDefaultRetryToken } from "./defaultRetryToken";
export class StandardRetryStrategy {
    constructor(maxAttemptsProvider) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = RETRY_MODES.STANDARD;
        this.retryToken = getDefaultRetryToken(INITIAL_RETRY_TOKENS, DEFAULT_RETRY_DELAY_BASE);
        this.maxAttemptsProvider = maxAttemptsProvider;
    }
    async acquireInitialRetryToken(retryTokenScope) {
        return this.retryToken;
    }
    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        const maxAttempts = await this.getMaxAttempts();
        if (this.shouldRetry(tokenToRenew, errorInfo, maxAttempts)) {
            tokenToRenew.getRetryTokenCount(errorInfo);
            return tokenToRenew;
        }
        throw new Error("No retry token available");
    }
    recordSuccess(token) {
        this.retryToken.releaseRetryTokens(token.getLastRetryCost());
    }
    async getMaxAttempts() {
        let maxAttempts;
        try {
            return await this.maxAttemptsProvider();
        }
        catch (error) {
            console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
            return DEFAULT_MAX_ATTEMPTS;
        }
    }
    shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
        const attempts = tokenToRenew.getRetryCount();
        return (attempts < maxAttempts &&
            tokenToRenew.hasRetryTokens(errorInfo.errorType) &&
            this.isRetryableError(errorInfo.errorType));
    }
    isRetryableError(errorType) {
        return errorType === "THROTTLING" || errorType === "TRANSIENT";
    }
}
