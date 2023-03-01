import { getDefaultRoleAssumerWithWebIdentity } from "@aws-sdk/client-sts";
import { fromWebToken as _fromWebToken, } from "@aws-sdk/credential-provider-web-identity";
export const fromWebToken = (init) => _fromWebToken({
    ...init,
    roleAssumerWithWebIdentity: init.roleAssumerWithWebIdentity ?? getDefaultRoleAssumerWithWebIdentity(init.clientConfig, init.clientPlugins),
});
