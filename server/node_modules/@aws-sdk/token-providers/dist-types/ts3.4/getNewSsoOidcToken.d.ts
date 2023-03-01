import { SSOToken } from "@aws-sdk/shared-ini-file-loader";
export declare const getNewSsoOidcToken: (
  ssoToken: SSOToken,
  ssoRegion: string
) => Promise<import("@aws-sdk/client-sso-oidc").CreateTokenCommandOutput>;
