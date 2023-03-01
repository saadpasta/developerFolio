"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttr = void 0;
const types_1 = require("../types");
const getAttrPathList_1 = require("./getAttrPathList");
const getAttr = (value, path) => (0, getAttrPathList_1.getAttrPathList)(path).reduce((acc, index) => {
    if (typeof acc !== "object") {
        throw new types_1.EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
    }
    else if (Array.isArray(acc)) {
        return acc[parseInt(index)];
    }
    return acc[index];
}, value);
exports.getAttr = getAttr;
