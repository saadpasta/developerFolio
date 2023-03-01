"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidHostLabel = void 0;
const VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
const isValidHostLabel = (value, allowSubDomains = false) => {
    if (!allowSubDomains) {
        return VALID_HOST_LABEL_REGEX.test(value);
    }
    const labels = value.split(".");
    for (const label of labels) {
        if (!(0, exports.isValidHostLabel)(label)) {
            return false;
        }
    }
    return true;
};
exports.isValidHostLabel = isValidHostLabel;
