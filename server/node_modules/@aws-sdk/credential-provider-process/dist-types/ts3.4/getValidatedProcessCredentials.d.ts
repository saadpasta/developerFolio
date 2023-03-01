import { AwsCredentialIdentity } from "@aws-sdk/types";
import { ProcessCredentials } from "./ProcessCredentials";
export declare const getValidatedProcessCredentials: (
  profileName: string,
  data: ProcessCredentials
) => AwsCredentialIdentity;
