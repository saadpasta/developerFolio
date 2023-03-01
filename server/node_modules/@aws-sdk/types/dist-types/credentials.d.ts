import { AwsCredentialIdentity } from "./identity";
import { Provider } from "./util";
/**
 * An object representing temporary or permanent AWS credentials.
 *
 * @deprecated Use {@AwsCredentialIdentity}
 */
export interface Credentials extends AwsCredentialIdentity {
}
/**
 * @deprecated Use {@AwsCredentialIdentityProvider}
 */
export declare type CredentialProvider = Provider<Credentials>;
