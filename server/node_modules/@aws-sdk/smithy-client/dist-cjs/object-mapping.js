"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMap = exports.map = void 0;
function map(arg0, arg1, arg2) {
    let target;
    let filter;
    let instructions;
    if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
        target = {};
        instructions = arg0;
    }
    else {
        target = arg0;
        if (typeof arg1 === "function") {
            filter = arg1;
            instructions = arg2;
            return mapWithFilter(target, filter, instructions);
        }
        else {
            instructions = arg1;
        }
    }
    for (const key of Object.keys(instructions)) {
        if (!Array.isArray(instructions[key])) {
            target[key] = instructions[key];
            continue;
        }
        let [filter, value] = instructions[key];
        if (typeof value === "function") {
            let _value;
            const defaultFilterPassed = filter === undefined && (_value = value()) != null;
            const customFilterPassed = (typeof filter === "function" && !!filter(void 0)) || (typeof filter !== "function" && !!filter);
            if (defaultFilterPassed) {
                target[key] = _value;
            }
            else if (customFilterPassed) {
                target[key] = value();
            }
        }
        else {
            const defaultFilterPassed = filter === undefined && value != null;
            const customFilterPassed = (typeof filter === "function" && !!filter(value)) || (typeof filter !== "function" && !!filter);
            if (defaultFilterPassed || customFilterPassed) {
                target[key] = value;
            }
        }
    }
    return target;
}
exports.map = map;
const convertMap = (target) => {
    const output = {};
    for (const [k, v] of Object.entries(target || {})) {
        output[k] = [, v];
    }
    return output;
};
exports.convertMap = convertMap;
const mapWithFilter = (target, filter, instructions) => {
    return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
        if (Array.isArray(value)) {
            _instructions[key] = value;
        }
        else {
            if (typeof value === "function") {
                _instructions[key] = [filter, value()];
            }
            else {
                _instructions[key] = [filter, value];
            }
        }
        return _instructions;
    }, {}));
};
