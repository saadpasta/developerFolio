import {
  AwsCredentialIdentity,
  ChecksumConstructor,
  HashConstructor,
} from "@aws-sdk/types";
export declare const createScope: (
  shortDate: string,
  region: string,
  service: string
) => string;
export declare const getSigningKey: (
  sha256Constructor: ChecksumConstructor | HashConstructor,
  credentials: AwsCredentialIdentity,
  shortDate: string,
  region: string,
  service: string
) => Promise<Uint8Array>;
export declare const clearCredentialCache: () => void;
