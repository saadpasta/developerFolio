"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardRetryStrategy = void 0;
const config_1 = require("./config");
const constants_1 = require("./constants");
const defaultRetryToken_1 = require("./defaultRetryToken");
class StandardRetryStrategy {
    constructor(maxAttemptsProvider) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = config_1.RETRY_MODES.STANDARD;
        this.retryToken = (0, defaultRetryToken_1.getDefaultRetryToken)(constants_1.INITIAL_RETRY_TOKENS, constants_1.DEFAULT_RETRY_DELAY_BASE);
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
            console.warn(`Max attempts provider could not resolve. Using default of ${config_1.DEFAULT_MAX_ATTEMPTS}`);
            return config_1.DEFAULT_MAX_ATTEMPTS;
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
exports.StandardRetryStrategy = StandardRetryStrategy;
