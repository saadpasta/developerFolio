"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromIni = void 0;
const client_sts_1 = require("@aws-sdk/client-sts");
const credential_provider_ini_1 = require("@aws-sdk/credential-provider-ini");
const fromIni = (init = {}) => {
    var _a, _b;
    return (0, credential_provider_ini_1.fromIni)({
        ...init,
        roleAssumer: (_a = init.roleAssumer) !== null && _a !== void 0 ? _a : (0, client_sts_1.getDefaultRoleAssumer)(init.clientConfig, init.clientPlugins),
        roleAssumerWithWebIdentity: (_b = init.roleAssumerWithWebIdentity) !== null && _b !== void 0 ? _b : (0, client_sts_1.getDefaultRoleAssumerWithWebIdentity)(init.clientConfig, init.clientPlugins),
    });
};
exports.fromIni = fromIni;
