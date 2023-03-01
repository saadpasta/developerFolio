"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGlobal = void 0;
function checkForMath(potentialGlobal) {
    // eslint-disable-next-line eqeqeq
    return potentialGlobal && potentialGlobal.Math == Math && potentialGlobal;
}
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
function getGlobal() {
    return (checkForMath(typeof globalThis === 'object' && globalThis) ||
        checkForMath(typeof window === 'object' && window) ||
        checkForMath(typeof self === 'object' && self) ||
        checkForMath(typeof global === 'object' && global) ||
        // eslint-disable-next-line @typescript-eslint/no-implied-eval
        Function('return this')());
}
exports.getGlobal = getGlobal;
//# sourceMappingURL=global.js.map