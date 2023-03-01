"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromCognitoIdentity = void 0;
const client_cognito_identity_1 = require("@aws-sdk/client-cognito-identity");
const credential_provider_cognito_identity_1 = require("@aws-sdk/credential-provider-cognito-identity");
const fromCognitoIdentity = (options) => {
    var _a;
    return (0, credential_provider_cognito_identity_1.fromCognitoIdentity)({
        ...options,
        client: new client_cognito_identity_1.CognitoIdentityClient((_a = options.clientConfig) !== null && _a !== void 0 ? _a : {}),
    });
};
exports.fromCognitoIdentity = fromCognitoIdentity;
