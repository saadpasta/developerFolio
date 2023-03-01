import { PaginationConfiguration } from "@aws-sdk/types";
import { CognitoIdentity } from "../CognitoIdentity";
import { CognitoIdentityClient } from "../CognitoIdentityClient";
export interface CognitoIdentityPaginationConfiguration
  extends PaginationConfiguration {
  client: CognitoIdentity | CognitoIdentityClient;
}
