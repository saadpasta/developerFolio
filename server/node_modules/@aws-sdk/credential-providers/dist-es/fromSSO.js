import { SSOClient } from "@aws-sdk/client-sso";
import { fromSSO as _fromSSO } from "@aws-sdk/credential-provider-sso";
export const fromSSO = (init = {}) => _fromSSO({ ...{ ssoClient: init.clientConfig ? new SSOClient(init.clientConfig) : undefined }, ...init });
