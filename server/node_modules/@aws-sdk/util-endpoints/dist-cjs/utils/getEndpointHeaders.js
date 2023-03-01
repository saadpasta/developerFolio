"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEndpointHeaders = void 0;
const types_1 = require("../types");
const evaluateExpression_1 = require("./evaluateExpression");
const getEndpointHeaders = (headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
    ...acc,
    [headerKey]: headerVal.map((headerValEntry) => {
        const processedExpr = (0, evaluateExpression_1.evaluateExpression)(headerValEntry, "Header value entry", options);
        if (typeof processedExpr !== "string") {
            throw new types_1.EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
        }
        return processedExpr;
    }),
}), {});
exports.getEndpointHeaders = getEndpointHeaders;
