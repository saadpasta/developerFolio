import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { Logins } from "./Logins";
export interface CognitoProviderParameters {
  client: CognitoIdentityClient;
  customRoleArn?: string;
  logins?: Logins;
}
