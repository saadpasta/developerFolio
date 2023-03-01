"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultRetryBackoffStrategy = void 0;
const constants_1 = require("./constants");
const getDefaultRetryBackoffStrategy = () => {
    let delayBase = constants_1.DEFAULT_RETRY_DELAY_BASE;
    const computeNextBackoffDelay = (attempts) => {
        return Math.floor(Math.min(constants_1.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
    };
    const setDelayBase = (delay) => {
        delayBase = delay;
    };
    return {
        computeNextBackoffDelay,
        setDelayBase,
    };
};
exports.getDefaultRetryBackoffStrategy = getDefaultRetryBackoffStrategy;
