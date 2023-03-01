import { AwsCredentialIdentity, ParsedIniData } from "@aws-sdk/types";
export declare const resolveProcessCredentials: (
  profileName: string,
  profiles: ParsedIniData
) => Promise<AwsCredentialIdentity>;
