"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromNodeProviderChain = void 0;
const client_sts_1 = require("@aws-sdk/client-sts");
const credential_provider_node_1 = require("@aws-sdk/credential-provider-node");
const fromNodeProviderChain = (init = {}) => {
    var _a, _b;
    return (0, credential_provider_node_1.defaultProvider)({
        ...init,
        roleAssumer: (_a = init.roleAssumer) !== null && _a !== void 0 ? _a : (0, client_sts_1.getDefaultRoleAssumer)(init.clientConfig, init.clientPlugins),
        roleAssumerWithWebIdentity: (_b = init.roleAssumerWithWebIdentity) !== null && _b !== void 0 ? _b : (0, client_sts_1.getDefaultRoleAssumerWithWebIdentity)(init.clientConfig, init.clientPlugins),
    });
};
exports.fromNodeProviderChain = fromNodeProviderChain;
