"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultRetryToken = void 0;
const constants_1 = require("./constants");
const defaultRetryBackoffStrategy_1 = require("./defaultRetryBackoffStrategy");
const getDefaultRetryToken = (initialRetryTokens, initialRetryDelay, initialRetryCount, options) => {
    var _a, _b, _c;
    const MAX_CAPACITY = initialRetryTokens;
    const retryCost = (_a = options === null || options === void 0 ? void 0 : options.retryCost) !== null && _a !== void 0 ? _a : constants_1.RETRY_COST;
    const timeoutRetryCost = (_b = options === null || options === void 0 ? void 0 : options.timeoutRetryCost) !== null && _b !== void 0 ? _b : constants_1.TIMEOUT_RETRY_COST;
    const retryBackoffStrategy = (_c = options === null || options === void 0 ? void 0 : options.retryBackoffStrategy) !== null && _c !== void 0 ? _c : (0, defaultRetryBackoffStrategy_1.getDefaultRetryBackoffStrategy)();
    let availableCapacity = initialRetryTokens;
    let retryDelay = Math.min(constants_1.MAXIMUM_RETRY_DELAY, initialRetryDelay);
    let lastRetryCost = undefined;
    let retryCount = initialRetryCount !== null && initialRetryCount !== void 0 ? initialRetryCount : 0;
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
        const delayBase = errorType === "THROTTLING" ? constants_1.THROTTLING_RETRY_DELAY_BASE : constants_1.DEFAULT_RETRY_DELAY_BASE;
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
        availableCapacity += releaseAmount !== null && releaseAmount !== void 0 ? releaseAmount : constants_1.NO_RETRY_INCREMENT;
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
exports.getDefaultRetryToken = getDefaultRetryToken;
