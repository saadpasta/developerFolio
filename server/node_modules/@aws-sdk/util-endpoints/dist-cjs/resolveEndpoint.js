"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveEndpoint = void 0;
const debug_1 = require("./debug");
const types_1 = require("./types");
const utils_1 = require("./utils");
const resolveEndpoint = (ruleSetObject, options) => {
    var _a, _b, _c, _d, _e, _f;
    const { endpointParams, logger } = options;
    const { parameters, rules } = ruleSetObject;
    (_b = (_a = options.logger) === null || _a === void 0 ? void 0 : _a.debug) === null || _b === void 0 ? void 0 : _b.call(_a, debug_1.debugId, `Initial EndpointParams: ${(0, debug_1.toDebugString)(endpointParams)}`);
    const paramsWithDefault = Object.entries(parameters)
        .filter(([, v]) => v.default != null)
        .map(([k, v]) => [k, v.default]);
    if (paramsWithDefault.length > 0) {
        for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
            endpointParams[paramKey] = (_c = endpointParams[paramKey]) !== null && _c !== void 0 ? _c : paramDefaultValue;
        }
    }
    const requiredParams = Object.entries(parameters)
        .filter(([, v]) => v.required)
        .map(([k]) => k);
    for (const requiredParam of requiredParams) {
        if (endpointParams[requiredParam] == null) {
            throw new types_1.EndpointError(`Missing required parameter: '${requiredParam}'`);
        }
    }
    const endpoint = (0, utils_1.evaluateRules)(rules, { endpointParams, logger, referenceRecord: {} });
    if ((_d = options.endpointParams) === null || _d === void 0 ? void 0 : _d.Endpoint) {
        try {
            const givenEndpoint = new URL(options.endpointParams.Endpoint);
            const { protocol, port } = givenEndpoint;
            endpoint.url.protocol = protocol;
            endpoint.url.port = port;
        }
        catch (e) {
        }
    }
    (_f = (_e = options.logger) === null || _e === void 0 ? void 0 : _e.debug) === null || _f === void 0 ? void 0 : _f.call(_e, debug_1.debugId, `Resolved endpoint: ${(0, debug_1.toDebugString)(endpoint)}`);
    return endpoint;
};
exports.resolveEndpoint = resolveEndpoint;
