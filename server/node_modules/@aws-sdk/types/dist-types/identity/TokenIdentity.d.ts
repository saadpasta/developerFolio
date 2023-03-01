import { Identity, IdentityProvider } from "./Identity";
export interface TokenIdentity extends Identity {
    /**
     * The literal token string
     */
    readonly token: string;
}
export declare type TokenIdentityProvider = IdentityProvider<TokenIdentity>;
