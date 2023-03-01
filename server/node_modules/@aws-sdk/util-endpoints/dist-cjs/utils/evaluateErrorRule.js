"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluateErrorRule = void 0;
const types_1 = require("../types");
const evaluateConditions_1 = require("./evaluateConditions");
const evaluateExpression_1 = require("./evaluateExpression");
const evaluateErrorRule = (errorRule, options) => {
    const { conditions, error } = errorRule;
    const { result, referenceRecord } = (0, evaluateConditions_1.evaluateConditions)(conditions, options);
    if (!result) {
        return;
    }
    throw new types_1.EndpointError((0, evaluateExpression_1.evaluateExpression)(error, "Error", {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    }));
};
exports.evaluateErrorRule = evaluateErrorRule;
