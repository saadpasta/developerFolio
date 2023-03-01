"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromSSO = void 0;
const client_sso_1 = require("@aws-sdk/client-sso");
const credential_provider_sso_1 = require("@aws-sdk/credential-provider-sso");
const fromSSO = (init = {}) => (0, credential_provider_sso_1.fromSSO)({ ...{ ssoClient: init.clientConfig ? new client_sso_1.SSOClient(init.clientConfig) : undefined }, ...init });
exports.fromSSO = fromSSO;
