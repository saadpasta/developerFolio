import { getDefaultRoleAssumerWithWebIdentity } from "@aws-sdk/client-sts";
import { fromTokenFile as _fromTokenFile, } from "@aws-sdk/credential-provider-web-identity";
export const fromTokenFile = (init = {}) => _fromTokenFile({
    ...init,
    roleAssumerWithWebIdentity: init.roleAssumerWithWebIdentity ?? getDefaultRoleAssumerWithWebIdentity(init.clientConfig, init.clientPlugins),
});
