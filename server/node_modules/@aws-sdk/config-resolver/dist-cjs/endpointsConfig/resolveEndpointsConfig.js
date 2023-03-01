"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveEndpointsConfig = void 0;
const util_middleware_1 = require("@aws-sdk/util-middleware");
const getEndpointFromRegion_1 = require("./utils/getEndpointFromRegion");
const resolveEndpointsConfig = (input) => {
    var _a, _b;
    const useDualstackEndpoint = (0, util_middleware_1.normalizeProvider)((_a = input.useDualstackEndpoint) !== null && _a !== void 0 ? _a : false);
    const { endpoint, useFipsEndpoint, urlParser } = input;
    return {
        ...input,
        tls: (_b = input.tls) !== null && _b !== void 0 ? _b : true,
        endpoint: endpoint
            ? (0, util_middleware_1.normalizeProvider)(typeof endpoint === "string" ? urlParser(endpoint) : endpoint)
            : () => (0, getEndpointFromRegion_1.getEndpointFromRegion)({ ...input, useDualstackEndpoint, useFipsEndpoint }),
        isCustomEndpoint: !!endpoint,
        useDualstackEndpoint,
    };
};
exports.resolveEndpointsConfig = resolveEndpointsConfig;
