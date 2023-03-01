"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromCognitoIdentityPool = void 0;
const client_cognito_identity_1 = require("@aws-sdk/client-cognito-identity");
const credential_provider_cognito_identity_1 = require("@aws-sdk/credential-provider-cognito-identity");
const fromCognitoIdentityPool = (options) => {
    var _a;
    return (0, credential_provider_cognito_identity_1.fromCognitoIdentityPool)({
        ...options,
        client: new client_cognito_identity_1.CognitoIdentityClient((_a = options.clientConfig) !== null && _a !== void 0 ? _a : {}),
    });
};
exports.fromCognitoIdentityPool = fromCognitoIdentityPool;
