import { DEFAULT_RETRY_DELAY_BASE, MAXIMUM_RETRY_DELAY, NO_RETRY_INCREMENT, RETRY_COST, THROTTLING_RETRY_DELAY_BASE, TIMEOUT_RETRY_COST, } from "./constants";
import { getDefaultRetryBackoffStrategy } from "./defaultRetryBackoffStrategy";
export const getDefaultRetryToken = (initialRetryTokens, initialRetryDelay, initialRetryCount, options) => {
    const MAX_CAPACITY = initialRetryTokens;
    const retryCost = options?.retryCost ?? RETRY_COST;
    const timeoutRetryCost = options?.timeoutRetryCost ?? TIMEOUT_RETRY_COST;
    const retryBackoffStrategy = options?.retryBackoffStrategy ?? getDefaultRetryBackoffStrategy();
    let availableCapacity = initialRetryTokens;
    let retryDelay = Math.min(MAXIMUM_RETRY_DELAY, initialRetryDelay);
    let lastRetryCost = undefined;
    let retryCount = initialRetryCount ?? 0;
    const getCapacityAmount = (errorType) => (errorType === "TRANSIENT" ? timeoutRetryCost : retryCost);
    const getRetryCount = () => retryCount;
    const getRetryDelay = () => retryDelay;
    const getLastRetryCost = () => lastRetryCost;
    const hasRetryTokens = (errorType) => getCapacityAmount(errorType) <= availableCapacity;
    const getRetryTokenCount = (errorInfo) => {
        const errorType = errorInfo.errorType;
        if (!hasRetryTokens(errorType)) {
            throw new Error("No retry token available");
        }
        const capacityAmount = getCapacityAmount(errorType);
        const delayBase = errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE;
        retryBackoffStrategy.setDelayBase(delayBase);
        const delayFromErrorType = retryBackoffStrategy.computeNextBackoffDelay(retryCount);
        if (errorInfo.retryAfterHint) {
            const delayFromRetryAfterHint = errorInfo.retryAfterHint.getTime() - Date.now();
            retryDelay = Math.max(delayFromRetryAfterHint || 0, delayFromErrorType);
        }
        else {
            retryDelay = delayFromErrorType;
        }
        retryCount++;
        lastRetryCost = capacityAmount;
        availableCapacity -= capacityAmount;
        return capacityAmount;
    };
    const releaseRetryTokens = (releaseAmount) => {
        availableCapacity += releaseAmount ?? NO_RETRY_INCREMENT;
        availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
    };
    return {
        getRetryCount,
        getRetryDelay,
        getLastRetryCost,
        hasRetryTokens,
        getRetryTokenCount,
        releaseRetryTokens,
    };
};
