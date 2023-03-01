"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromSSO = void 0;
const property_provider_1 = require("@aws-sdk/property-provider");
const shared_ini_file_loader_1 = require("@aws-sdk/shared-ini-file-loader");
const isSsoProfile_1 = require("./isSsoProfile");
const resolveSSOCredentials_1 = require("./resolveSSOCredentials");
const validateSsoProfile_1 = require("./validateSsoProfile");
const fromSSO = (init = {}) => async () => {
    const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, ssoSession } = init;
    const profileName = (0, shared_ini_file_loader_1.getProfileName)(init);
    if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
        const profiles = await (0, shared_ini_file_loader_1.parseKnownFiles)(init);
        const profile = profiles[profileName];
        if (!profile) {
            throw new property_provider_1.CredentialsProviderError(`Profile ${profileName} was not found.`);
        }
        if (!(0, isSsoProfile_1.isSsoProfile)(profile)) {
            throw new property_provider_1.CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`);
        }
        if (profile === null || profile === void 0 ? void 0 : profile.sso_session) {
            const ssoSessions = await (0, shared_ini_file_loader_1.loadSsoSessionData)(init);
            const session = ssoSessions[profile.sso_session];
            const conflictMsg = ` configurations in profile ${profileName} and sso-session ${profile.sso_session}`;
            if (ssoRegion && ssoRegion !== session.sso_region) {
                throw new property_provider_1.CredentialsProviderError(`Conflicting SSO region` + conflictMsg, false);
            }
            if (ssoStartUrl && ssoStartUrl !== session.sso_start_url) {
                throw new property_provider_1.CredentialsProviderError(`Conflicting SSO start_url` + conflictMsg, false);
            }
            profile.sso_region = session.sso_region;
            profile.sso_start_url = session.sso_start_url;
        }
        const { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = (0, validateSsoProfile_1.validateSsoProfile)(profile);
        return (0, resolveSSOCredentials_1.resolveSSOCredentials)({
            ssoStartUrl: sso_start_url,
            ssoSession: sso_session,
            ssoAccountId: sso_account_id,
            ssoRegion: sso_region,
            ssoRoleName: sso_role_name,
            ssoClient: ssoClient,
            profile: profileName,
        });
    }
    else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
        throw new property_provider_1.CredentialsProviderError("Incomplete configuration. The fromSSO() argument hash must include " +
            '"ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"');
    }
    else {
        return (0, resolveSSOCredentials_1.resolveSSOCredentials)({
            ssoStartUrl,
            ssoSession,
            ssoAccountId,
            ssoRegion,
            ssoRoleName,
            ssoClient,
            profile: profileName,
        });
    }
};
exports.fromSSO = fromSSO;
