"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTokenExpiry = void 0;
const property_provider_1 = require("@aws-sdk/property-provider");
const constants_1 = require("./constants");
const validateTokenExpiry = (token) => {
    if (token.expiration && token.expiration.getTime() < Date.now()) {
        throw new property_provider_1.TokenProviderError(`Token is expired. ${constants_1.REFRESH_MESSAGE}`, false);
    }
};
exports.validateTokenExpiry = validateTokenExpiry;
