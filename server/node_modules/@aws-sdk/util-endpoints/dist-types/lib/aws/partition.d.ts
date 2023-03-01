import { EndpointPartition } from "@aws-sdk/types";
/**
 * Evaluates a single string argument value as a region, and matches the
 * string value to an AWS partition.
 * The matcher MUST always return a successful object describing the partition
 * that the region has been determined to be a part of.
 */
export declare const partition: (value: string) => EndpointPartition;
