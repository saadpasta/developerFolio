import { AssumeRoleCommand, STSClient } from "@aws-sdk/client-sts";
import { CredentialsProviderError } from "@aws-sdk/property-provider";
export const fromTemporaryCredentials = (options) => {
    let stsClient;
    return async () => {
        const params = { ...options.params, RoleSessionName: options.params.RoleSessionName ?? "aws-sdk-js-" + Date.now() };
        if (params?.SerialNumber) {
            if (!options.mfaCodeProvider) {
                throw new CredentialsProviderError(`Temporary credential requires multi-factor authentication,` + ` but no MFA code callback was provided.`, false);
            }
            params.TokenCode = await options.mfaCodeProvider(params?.SerialNumber);
        }
        if (!stsClient)
            stsClient = new STSClient({ ...options.clientConfig, credentials: options.masterCredentials });
        if (options.clientPlugins) {
            for (const plugin of options.clientPlugins) {
                stsClient.middlewareStack.use(plugin);
            }
        }
        const { Credentials } = await stsClient.send(new AssumeRoleCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
            throw new CredentialsProviderError(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
        }
        return {
            accessKeyId: Credentials.AccessKeyId,
            secretAccessKey: Credentials.SecretAccessKey,
            sessionToken: Credentials.SessionToken,
            expiration: Credentials.Expiration,
        };
    };
};
