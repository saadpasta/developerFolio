"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromTemporaryCredentials = void 0;
const client_sts_1 = require("@aws-sdk/client-sts");
const property_provider_1 = require("@aws-sdk/property-provider");
const fromTemporaryCredentials = (options) => {
    let stsClient;
    return async () => {
        var _a;
        const params = { ...options.params, RoleSessionName: (_a = options.params.RoleSessionName) !== null && _a !== void 0 ? _a : "aws-sdk-js-" + Date.now() };
        if (params === null || params === void 0 ? void 0 : params.SerialNumber) {
            if (!options.mfaCodeProvider) {
                throw new property_provider_1.CredentialsProviderError(`Temporary credential requires multi-factor authentication,` + ` but no MFA code callback was provided.`, false);
            }
            params.TokenCode = await options.mfaCodeProvider(params === null || params === void 0 ? void 0 : params.SerialNumber);
        }
        if (!stsClient)
            stsClient = new client_sts_1.STSClient({ ...options.clientConfig, credentials: options.masterCredentials });
        if (options.clientPlugins) {
            for (const plugin of options.clientPlugins) {
                stsClient.middlewareStack.use(plugin);
            }
        }
        const { Credentials } = await stsClient.send(new client_sts_1.AssumeRoleCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
            throw new property_provider_1.CredentialsProviderError(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
        }
        return {
            accessKeyId: Credentials.AccessKeyId,
            secretAccessKey: Credentials.SecretAccessKey,
            sessionToken: Credentials.SessionToken,
            expiration: Credentials.Expiration,
        };
    };
};
exports.fromTemporaryCredentials = fromTemporaryCredentials;
