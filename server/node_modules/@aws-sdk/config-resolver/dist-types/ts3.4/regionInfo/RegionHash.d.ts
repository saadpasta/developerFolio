import { EndpointVariant } from "./EndpointVariant";
export declare type RegionHash = Record<
  string,
  {
    variants: EndpointVariant[];
    signingService?: string;
    signingRegion?: string;
  }
>;
