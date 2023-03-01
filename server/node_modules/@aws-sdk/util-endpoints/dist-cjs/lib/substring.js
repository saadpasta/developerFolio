"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.substring = void 0;
const substring = (input, start, stop, reverse) => {
    if (start >= stop || input.length < stop) {
        return null;
    }
    if (!reverse) {
        return input.substring(start, stop);
    }
    return input.substring(input.length - stop, input.length - start);
};
exports.substring = substring;
