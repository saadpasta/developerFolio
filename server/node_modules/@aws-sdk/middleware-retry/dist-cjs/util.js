"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asSdkError = void 0;
const asSdkError = (error) => {
    if (error instanceof Error)
        return error;
    if (error instanceof Object)
        return Object.assign(new Error(), error);
    if (typeof error === "string")
        return new Error(error);
    return new Error(`AWS SDK error wrapper for ${error}`);
};
exports.asSdkError = asSdkError;
