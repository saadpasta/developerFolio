import { EndpointParameters } from "@aws-sdk/types";
export declare const resolveParamsForS3: (
  endpointParams: EndpointParameters
) => Promise<EndpointParameters>;
export declare const DOT_PATTERN: RegExp;
export declare const S3_HOSTNAME_PATTERN: RegExp;
export declare const isDnsCompatibleBucketName: (bucketName: string) => boolean;
export declare const isArnBucketName: (bucketName: string) => boolean;
