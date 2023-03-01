"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwDefaultError = void 0;
const exceptions_1 = require("./exceptions");
const throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode }) => {
    const $metadata = deserializeMetadata(output);
    const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
    const response = new exceptionCtor({
        name: (parsedBody === null || parsedBody === void 0 ? void 0 : parsedBody.code) || (parsedBody === null || parsedBody === void 0 ? void 0 : parsedBody.Code) || errorCode || statusCode || "UnknownError",
        $fault: "client",
        $metadata,
    });
    throw (0, exceptions_1.decorateServiceException)(response, parsedBody);
};
exports.throwDefaultError = throwDefaultError;
const deserializeMetadata = (output) => {
    var _a, _b;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_b = (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"]) !== null && _b !== void 0 ? _b : output.headers["x-amz-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
