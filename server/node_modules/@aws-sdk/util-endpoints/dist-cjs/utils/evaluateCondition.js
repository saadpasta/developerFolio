"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluateCondition = void 0;
const debug_1 = require("../debug");
const types_1 = require("../types");
const callFunction_1 = require("./callFunction");
const evaluateCondition = ({ assign, ...fnArgs }, options) => {
    var _a, _b;
    if (assign && assign in options.referenceRecord) {
        throw new types_1.EndpointError(`'${assign}' is already defined in Reference Record.`);
    }
    const value = (0, callFunction_1.callFunction)(fnArgs, options);
    (_b = (_a = options.logger) === null || _a === void 0 ? void 0 : _a.debug) === null || _b === void 0 ? void 0 : _b.call(_a, debug_1.debugId, `evaluateCondition: ${(0, debug_1.toDebugString)(fnArgs)} = ${(0, debug_1.toDebugString)(value)}`);
    return {
        result: value === "" ? true : !!value,
        ...(assign != null && { toAssign: { name: assign, value } }),
    };
};
exports.evaluateCondition = evaluateCondition;
