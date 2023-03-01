import { EndpointVariant } from "./EndpointVariant";
export declare type PartitionHash = Record<
  string,
  {
    regions: string[];
    regionRegex: string;
    variants: EndpointVariant[];
    endpoint?: string;
  }
>;
