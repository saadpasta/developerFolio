"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluateTreeRule = void 0;
const evaluateConditions_1 = require("./evaluateConditions");
const evaluateRules_1 = require("./evaluateRules");
const evaluateTreeRule = (treeRule, options) => {
    const { conditions, rules } = treeRule;
    const { result, referenceRecord } = (0, evaluateConditions_1.evaluateConditions)(conditions, options);
    if (!result) {
        return;
    }
    return (0, evaluateRules_1.evaluateRules)(rules, {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    });
};
exports.evaluateTreeRule = evaluateTreeRule;
