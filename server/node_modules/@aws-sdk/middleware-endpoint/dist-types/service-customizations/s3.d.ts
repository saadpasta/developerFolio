import { EndpointParameters } from "@aws-sdk/types";
export declare const resolveParamsForS3: (endpointParams: EndpointParameters) => Promise<EndpointParameters>;
export declare const DOT_PATTERN: RegExp;
export declare const S3_HOSTNAME_PATTERN: RegExp;
/**
 * Determines whether a given string is DNS compliant per the rules outlined by
 * S3. Length, capitaization, and leading dot restrictions are enforced by the
 * DOMAIN_PATTERN regular expression.
 * @internal
 *
 * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html
 */
export declare const isDnsCompatibleBucketName: (bucketName: string) => boolean;
export declare const isArnBucketName: (bucketName: string) => boolean;
