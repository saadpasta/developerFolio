"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorateDefaultCredentialProvider = exports.getDefaultRoleAssumerWithWebIdentity = exports.getDefaultRoleAssumer = void 0;
const defaultStsRoleAssumers_1 = require("./defaultStsRoleAssumers");
const STSClient_1 = require("./STSClient");
const getCustomizableStsClientCtor = (baseCtor, customizations) => {
    if (!customizations)
        return baseCtor;
    else
        return class CustomizableSTSClient extends baseCtor {
            constructor(config) {
                super(config);
                for (const customization of customizations) {
                    this.middlewareStack.use(customization);
                }
            }
        };
};
const getDefaultRoleAssumer = (stsOptions = {}, stsPlugins) => (0, defaultStsRoleAssumers_1.getDefaultRoleAssumer)(stsOptions, getCustomizableStsClientCtor(STSClient_1.STSClient, stsPlugins));
exports.getDefaultRoleAssumer = getDefaultRoleAssumer;
const getDefaultRoleAssumerWithWebIdentity = (stsOptions = {}, stsPlugins) => (0, defaultStsRoleAssumers_1.getDefaultRoleAssumerWithWebIdentity)(stsOptions, getCustomizableStsClientCtor(STSClient_1.STSClient, stsPlugins));
exports.getDefaultRoleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity;
const decorateDefaultCredentialProvider = (provider) => (input) => provider({
    roleAssumer: (0, exports.getDefaultRoleAssumer)(input),
    roleAssumerWithWebIdentity: (0, exports.getDefaultRoleAssumerWithWebIdentity)(input),
    ...input,
});
exports.decorateDefaultCredentialProvider = decorateDefaultCredentialProvider;
