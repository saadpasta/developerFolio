"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewSsoOidcToken = void 0;
const client_sso_oidc_1 = require("@aws-sdk/client-sso-oidc");
const getSsoOidcClient_1 = require("./getSsoOidcClient");
const getNewSsoOidcToken = (ssoToken, ssoRegion) => {
    const ssoOidcClient = (0, getSsoOidcClient_1.getSsoOidcClient)(ssoRegion);
    return ssoOidcClient.send(new client_sso_oidc_1.CreateTokenCommand({
        clientId: ssoToken.clientId,
        clientSecret: ssoToken.clientSecret,
        refreshToken: ssoToken.refreshToken,
        grantType: "refresh_token",
    }));
};
exports.getNewSsoOidcToken = getNewSsoOidcToken;
