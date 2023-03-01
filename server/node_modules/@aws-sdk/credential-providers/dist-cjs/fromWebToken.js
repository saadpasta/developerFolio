"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromWebToken = void 0;
const client_sts_1 = require("@aws-sdk/client-sts");
const credential_provider_web_identity_1 = require("@aws-sdk/credential-provider-web-identity");
const fromWebToken = (init) => {
    var _a;
    return (0, credential_provider_web_identity_1.fromWebToken)({
        ...init,
        roleAssumerWithWebIdentity: (_a = init.roleAssumerWithWebIdentity) !== null && _a !== void 0 ? _a : (0, client_sts_1.getDefaultRoleAssumerWithWebIdentity)(init.clientConfig, init.clientPlugins),
    });
};
exports.fromWebToken = fromWebToken;
