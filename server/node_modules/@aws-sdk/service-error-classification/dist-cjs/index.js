"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isServerError = exports.isTransientError = exports.isThrottlingError = exports.isClockSkewError = exports.isRetryableByTrait = void 0;
const constants_1 = require("./constants");
const isRetryableByTrait = (error) => error.$retryable !== undefined;
exports.isRetryableByTrait = isRetryableByTrait;
const isClockSkewError = (error) => constants_1.CLOCK_SKEW_ERROR_CODES.includes(error.name);
exports.isClockSkewError = isClockSkewError;
const isThrottlingError = (error) => {
    var _a, _b;
    return ((_a = error.$metadata) === null || _a === void 0 ? void 0 : _a.httpStatusCode) === 429 ||
        constants_1.THROTTLING_ERROR_CODES.includes(error.name) ||
        ((_b = error.$retryable) === null || _b === void 0 ? void 0 : _b.throttling) == true;
};
exports.isThrottlingError = isThrottlingError;
const isTransientError = (error) => {
    var _a;
    return constants_1.TRANSIENT_ERROR_CODES.includes(error.name) ||
        constants_1.NODEJS_TIMEOUT_ERROR_CODES.includes((error === null || error === void 0 ? void 0 : error.code) || "") ||
        constants_1.TRANSIENT_ERROR_STATUS_CODES.includes(((_a = error.$metadata) === null || _a === void 0 ? void 0 : _a.httpStatusCode) || 0);
};
exports.isTransientError = isTransientError;
const isServerError = (error) => {
    var _a;
    if (((_a = error.$metadata) === null || _a === void 0 ? void 0 : _a.httpStatusCode) !== undefined) {
        const statusCode = error.$metadata.httpStatusCode;
        if (500 <= statusCode && statusCode <= 599 && !(0, exports.isTransientError)(error)) {
            return true;
        }
        return false;
    }
    return false;
};
exports.isServerError = isServerError;
