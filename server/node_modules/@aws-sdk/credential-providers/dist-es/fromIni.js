import { getDefaultRoleAssumer, getDefaultRoleAssumerWithWebIdentity } from "@aws-sdk/client-sts";
import { fromIni as _fromIni } from "@aws-sdk/credential-provider-ini";
export const fromIni = (init = {}) => _fromIni({
    ...init,
    roleAssumer: init.roleAssumer ?? getDefaultRoleAssumer(init.clientConfig, init.clientPlugins),
    roleAssumerWithWebIdentity: init.roleAssumerWithWebIdentity ?? getDefaultRoleAssumerWithWebIdentity(init.clientConfig, init.clientPlugins),
});
