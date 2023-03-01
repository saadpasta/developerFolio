import { SourceProfileInit } from "@aws-sdk/shared-ini-file-loader";
import { TokenIdentityProvider } from "@aws-sdk/types";
export interface FromSsoInit extends SourceProfileInit {
}
/**
 * Creates a token provider that will read from SSO token cache or ssoOidc.createToken() call.
 */
export declare const fromSso: (init?: FromSsoInit) => TokenIdentityProvider;
