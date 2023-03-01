"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveCustomEndpointsConfig = void 0;
const util_middleware_1 = require("@aws-sdk/util-middleware");
const resolveCustomEndpointsConfig = (input) => {
    var _a, _b;
    const { endpoint, urlParser } = input;
    return {
        ...input,
        tls: (_a = input.tls) !== null && _a !== void 0 ? _a : true,
        endpoint: (0, util_middleware_1.normalizeProvider)(typeof endpoint === "string" ? urlParser(endpoint) : endpoint),
        isCustomEndpoint: true,
        useDualstackEndpoint: (0, util_middleware_1.normalizeProvider)((_b = input.useDualstackEndpoint) !== null && _b !== void 0 ? _b : false),
    };
};
exports.resolveCustomEndpointsConfig = resolveCustomEndpointsConfig;
