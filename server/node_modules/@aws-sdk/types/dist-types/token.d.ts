import { TokenIdentity } from "./identity";
import { Provider } from "./util";
/**
 * An object representing temporary or permanent AWS token.
 *
 * @deprecated Use {@TokenIdentity}
 */
export interface Token extends TokenIdentity {
}
/**
 * @deprecated Use {@TokenIdentityProvider}
 */
export declare type TokenProvider = Provider<Token>;
