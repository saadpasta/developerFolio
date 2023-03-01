"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callFunction = void 0;
const tslib_1 = require("tslib");
const lib = tslib_1.__importStar(require("../lib"));
const evaluateExpression_1 = require("./evaluateExpression");
const callFunction = ({ fn, argv }, options) => {
    const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : (0, evaluateExpression_1.evaluateExpression)(arg, "arg", options));
    return fn.split(".").reduce((acc, key) => acc[key], lib)(...evaluatedArgs);
};
exports.callFunction = callFunction;
