"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromSso = void 0;
const property_provider_1 = require("@aws-sdk/property-provider");
const shared_ini_file_loader_1 = require("@aws-sdk/shared-ini-file-loader");
const constants_1 = require("./constants");
const getNewSsoOidcToken_1 = require("./getNewSsoOidcToken");
const validateTokenExpiry_1 = require("./validateTokenExpiry");
const validateTokenKey_1 = require("./validateTokenKey");
const writeSSOTokenToFile_1 = require("./writeSSOTokenToFile");
const lastRefreshAttemptTime = new Date(0);
const fromSso = (init = {}) => async () => {
    const profiles = await (0, shared_ini_file_loader_1.parseKnownFiles)(init);
    const profileName = (0, shared_ini_file_loader_1.getProfileName)(init);
    const profile = profiles[profileName];
    if (!profile) {
        throw new property_provider_1.TokenProviderError(`Profile '${profileName}' could not be found in shared credentials file.`, false);
    }
    else if (!profile["sso_session"]) {
        throw new property_provider_1.TokenProviderError(`Profile '${profileName}' is missing required property 'sso_session'.`);
    }
    const ssoSessionName = profile["sso_session"];
    const ssoSessions = await (0, shared_ini_file_loader_1.loadSsoSessionData)(init);
    const ssoSession = ssoSessions[ssoSessionName];
    if (!ssoSession) {
        throw new property_provider_1.TokenProviderError(`Sso session '${ssoSessionName}' could not be found in shared credentials file.`, false);
    }
    for (const ssoSessionRequiredKey of ["sso_start_url", "sso_region"]) {
        if (!ssoSession[ssoSessionRequiredKey]) {
            throw new property_provider_1.TokenProviderError(`Sso session '${ssoSessionName}' is missing required property '${ssoSessionRequiredKey}'.`, false);
        }
    }
    const ssoStartUrl = ssoSession["sso_start_url"];
    const ssoRegion = ssoSession["sso_region"];
    let ssoToken;
    try {
        ssoToken = await (0, shared_ini_file_loader_1.getSSOTokenFromFile)(ssoSessionName);
    }
    catch (e) {
        throw new property_provider_1.TokenProviderError(`The SSO session token associated with profile=${profileName} was not found or is invalid. ${constants_1.REFRESH_MESSAGE}`, false);
    }
    (0, validateTokenKey_1.validateTokenKey)("accessToken", ssoToken.accessToken);
    (0, validateTokenKey_1.validateTokenKey)("expiresAt", ssoToken.expiresAt);
    const { accessToken, expiresAt } = ssoToken;
    const existingToken = { token: accessToken, expiration: new Date(expiresAt) };
    if (existingToken.expiration.getTime() - Date.now() > constants_1.EXPIRE_WINDOW_MS) {
        return existingToken;
    }
    if (Date.now() - lastRefreshAttemptTime.getTime() < 30 * 1000) {
        (0, validateTokenExpiry_1.validateTokenExpiry)(existingToken);
        return existingToken;
    }
    (0, validateTokenKey_1.validateTokenKey)("clientId", ssoToken.clientId, true);
    (0, validateTokenKey_1.validateTokenKey)("clientSecret", ssoToken.clientSecret, true);
    (0, validateTokenKey_1.validateTokenKey)("refreshToken", ssoToken.refreshToken, true);
    try {
        lastRefreshAttemptTime.setTime(Date.now());
        const newSsoOidcToken = await (0, getNewSsoOidcToken_1.getNewSsoOidcToken)(ssoToken, ssoRegion);
        (0, validateTokenKey_1.validateTokenKey)("accessToken", newSsoOidcToken.accessToken);
        (0, validateTokenKey_1.validateTokenKey)("expiresIn", newSsoOidcToken.expiresIn);
        const newTokenExpiration = new Date(Date.now() + newSsoOidcToken.expiresIn * 1000);
        try {
            await (0, writeSSOTokenToFile_1.writeSSOTokenToFile)(ssoSessionName, {
                ...ssoToken,
                accessToken: newSsoOidcToken.accessToken,
                expiresAt: newTokenExpiration.toISOString(),
                refreshToken: newSsoOidcToken.refreshToken,
            });
        }
        catch (error) {
        }
        return {
            token: newSsoOidcToken.accessToken,
            expiration: newTokenExpiration,
        };
    }
    catch (error) {
        (0, validateTokenExpiry_1.validateTokenExpiry)(existingToken);
        return existingToken;
    }
};
exports.fromSso = fromSso;
