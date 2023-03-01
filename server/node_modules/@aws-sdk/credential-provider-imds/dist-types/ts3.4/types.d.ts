import { AwsCredentialIdentity } from "@aws-sdk/types";
export interface InstanceMetadataCredentials extends AwsCredentialIdentity {
  readonly originalExpiration?: Date;
}
