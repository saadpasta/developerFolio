import { getDefaultRoleAssumer, getDefaultRoleAssumerWithWebIdentity } from "@aws-sdk/client-sts";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
export const fromNodeProviderChain = (init = {}) => defaultProvider({
    ...init,
    roleAssumer: init.roleAssumer ?? getDefaultRoleAssumer(init.clientConfig, init.clientPlugins),
    roleAssumerWithWebIdentity: init.roleAssumerWithWebIdentity ?? getDefaultRoleAssumerWithWebIdentity(init.clientConfig, init.clientPlugins),
});
