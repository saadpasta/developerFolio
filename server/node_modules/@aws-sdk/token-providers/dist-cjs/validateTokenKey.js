"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTokenKey = void 0;
const property_provider_1 = require("@aws-sdk/property-provider");
const constants_1 = require("./constants");
const validateTokenKey = (key, value, forRefresh = false) => {
    if (typeof value === "undefined") {
        throw new property_provider_1.TokenProviderError(`Value not present for '${key}' in SSO Token${forRefresh ? ". Cannot refresh" : ""}. ${constants_1.REFRESH_MESSAGE}`, false);
    }
};
exports.validateTokenKey = validateTokenKey;
