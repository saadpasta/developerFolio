import { TokenIdentity } from "./identity";
import { Provider } from "./util";
export interface Token extends TokenIdentity {}
export declare type TokenProvider = Provider<Token>;
