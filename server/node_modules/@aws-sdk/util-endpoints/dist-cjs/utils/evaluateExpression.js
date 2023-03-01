"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluateExpression = void 0;
const types_1 = require("../types");
const callFunction_1 = require("./callFunction");
const evaluateTemplate_1 = require("./evaluateTemplate");
const getReferenceValue_1 = require("./getReferenceValue");
const evaluateExpression = (obj, keyName, options) => {
    if (typeof obj === "string") {
        return (0, evaluateTemplate_1.evaluateTemplate)(obj, options);
    }
    else if (obj["fn"]) {
        return (0, callFunction_1.callFunction)(obj, options);
    }
    else if (obj["ref"]) {
        return (0, getReferenceValue_1.getReferenceValue)(obj, options);
    }
    throw new types_1.EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
};
exports.evaluateExpression = evaluateExpression;
