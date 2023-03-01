"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluateConditions = void 0;
const debug_1 = require("../debug");
const evaluateCondition_1 = require("./evaluateCondition");
const evaluateConditions = (conditions = [], options) => {
    var _a, _b;
    const conditionsReferenceRecord = {};
    for (const condition of conditions) {
        const { result, toAssign } = (0, evaluateCondition_1.evaluateCondition)(condition, {
            ...options,
            referenceRecord: {
                ...options.referenceRecord,
                ...conditionsReferenceRecord,
            },
        });
        if (!result) {
            return { result };
        }
        if (toAssign) {
            conditionsReferenceRecord[toAssign.name] = toAssign.value;
            (_b = (_a = options.logger) === null || _a === void 0 ? void 0 : _a.debug) === null || _b === void 0 ? void 0 : _b.call(_a, debug_1.debugId, `assign: ${toAssign.name} := ${(0, debug_1.toDebugString)(toAssign.value)}`);
        }
    }
    return { result: true, referenceRecord: conditionsReferenceRecord };
};
exports.evaluateConditions = evaluateConditions;
