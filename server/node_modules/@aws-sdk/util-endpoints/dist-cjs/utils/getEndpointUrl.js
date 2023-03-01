"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEndpointUrl = void 0;
const types_1 = require("../types");
const evaluateExpression_1 = require("./evaluateExpression");
const getEndpointUrl = (endpointUrl, options) => {
    const expression = (0, evaluateExpression_1.evaluateExpression)(endpointUrl, "Endpoint URL", options);
    if (typeof expression === "string") {
        try {
            return new URL(expression);
        }
        catch (error) {
            console.error(`Failed to construct URL with ${expression}`, error);
            throw error;
        }
    }
    throw new types_1.EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
};
exports.getEndpointUrl = getEndpointUrl;
