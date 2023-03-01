"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluateEndpointRule = void 0;
const debug_1 = require("../debug");
const evaluateConditions_1 = require("./evaluateConditions");
const getEndpointHeaders_1 = require("./getEndpointHeaders");
const getEndpointProperties_1 = require("./getEndpointProperties");
const getEndpointUrl_1 = require("./getEndpointUrl");
const evaluateEndpointRule = (endpointRule, options) => {
    var _a, _b;
    const { conditions, endpoint } = endpointRule;
    const { result, referenceRecord } = (0, evaluateConditions_1.evaluateConditions)(conditions, options);
    if (!result) {
        return;
    }
    const endpointRuleOptions = {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    };
    const { url, properties, headers } = endpoint;
    (_b = (_a = options.logger) === null || _a === void 0 ? void 0 : _a.debug) === null || _b === void 0 ? void 0 : _b.call(_a, debug_1.debugId, `Resolving endpoint from template: ${(0, debug_1.toDebugString)(endpoint)}`);
    return {
        ...(headers != undefined && {
            headers: (0, getEndpointHeaders_1.getEndpointHeaders)(headers, endpointRuleOptions),
        }),
        ...(properties != undefined && {
            properties: (0, getEndpointProperties_1.getEndpointProperties)(properties, endpointRuleOptions),
        }),
        url: (0, getEndpointUrl_1.getEndpointUrl)(url, endpointRuleOptions),
    };
};
exports.evaluateEndpointRule = evaluateEndpointRule;
