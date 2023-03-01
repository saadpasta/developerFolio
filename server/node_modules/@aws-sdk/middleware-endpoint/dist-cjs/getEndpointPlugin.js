"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEndpointPlugin = exports.endpointMiddlewareOptions = void 0;
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const endpointMiddleware_1 = require("./endpointMiddleware");
exports.endpointMiddlewareOptions = {
    step: "serialize",
    tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
    name: "endpointV2Middleware",
    override: true,
    relation: "before",
    toMiddleware: middleware_serde_1.serializerMiddlewareOption.name,
};
const getEndpointPlugin = (config, instructions) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo((0, endpointMiddleware_1.endpointMiddleware)({
            config,
            instructions,
        }), exports.endpointMiddlewareOptions);
    },
});
exports.getEndpointPlugin = getEndpointPlugin;
