"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromStatic = void 0;
const property_provider_1 = require("@aws-sdk/property-provider");
const fromStatic = ({ token }) => async () => {
    if (!token || !token.token) {
        throw new property_provider_1.TokenProviderError(`Please pass a valid token to fromStatic`, false);
    }
    return token;
};
exports.fromStatic = fromStatic;
