"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReferenceValue = void 0;
const getReferenceValue = ({ ref }, options) => {
    const referenceRecord = {
        ...options.endpointParams,
        ...options.referenceRecord,
    };
    return referenceRecord[ref];
};
exports.getReferenceValue = getReferenceValue;
