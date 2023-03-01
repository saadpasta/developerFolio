import * as lib from "../lib";
import { evaluateExpression } from "./evaluateExpression";
export const callFunction = ({ fn, argv }, options) => {
    const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : evaluateExpression(arg, "arg", options));
    return fn.split(".").reduce((acc, key) => acc[key], lib)(...evaluatedArgs);
};
