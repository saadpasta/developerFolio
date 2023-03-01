import { Identity, IdentityProvider } from "./Identity";
export interface TokenIdentity extends Identity {
  readonly token: string;
}
export declare type TokenIdentityProvider = IdentityProvider<TokenIdentity>;
