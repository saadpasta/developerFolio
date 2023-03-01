import { Endpoint, EndpointURL } from "@aws-sdk/types";
export declare const parseURL: (
  value: string | URL | Endpoint
) => EndpointURL | null;
