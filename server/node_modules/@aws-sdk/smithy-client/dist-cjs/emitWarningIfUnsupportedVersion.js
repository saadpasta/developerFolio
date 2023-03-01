"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emitWarningIfUnsupportedVersion = void 0;
let warningEmitted = false;
const emitWarningIfUnsupportedVersion = (version) => {
    if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 14) {
        warningEmitted = true;
    }
};
exports.emitWarningIfUnsupportedVersion = emitWarningIfUnsupportedVersion;
