import { EndpointVariant } from "./EndpointVariant";
/**
 * The hash of partition with the information specific to that partition.
 * The information includes the list of regions belonging to that partition,
 * and the hostname to be used for the partition.
 */
export declare type PartitionHash = Record<string, {
    regions: string[];
    regionRegex: string;
    variants: EndpointVariant[];
    endpoint?: string;
}>;
