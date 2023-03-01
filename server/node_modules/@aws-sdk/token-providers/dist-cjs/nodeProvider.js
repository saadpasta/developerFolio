"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeProvider = void 0;
const property_provider_1 = require("@aws-sdk/property-provider");
const fromSso_1 = require("./fromSso");
const nodeProvider = (init = {}) => (0, property_provider_1.memoize)((0, property_provider_1.chain)((0, fromSso_1.fromSso)(init), async () => {
    throw new property_provider_1.TokenProviderError("Could not load token from any providers", false);
}), (token) => token.expiration !== undefined && token.expiration.getTime() - Date.now() < 300000, (token) => token.expiration !== undefined);
exports.nodeProvider = nodeProvider;
