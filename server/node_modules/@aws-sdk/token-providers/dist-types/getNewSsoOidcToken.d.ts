import { SSOToken } from "@aws-sdk/shared-ini-file-loader";
/**
 * Returns a new SSO OIDC token from ssoOids.createToken() API call.
 */
export declare const getNewSsoOidcToken: (ssoToken: SSOToken, ssoRegion: string) => Promise<import("@aws-sdk/client-sso-oidc").CreateTokenCommandOutput>;
