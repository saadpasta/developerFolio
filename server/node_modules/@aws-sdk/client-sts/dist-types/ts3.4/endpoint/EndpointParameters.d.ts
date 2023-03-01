import {
  Endpoint,
  EndpointParameters as __EndpointParameters,
  EndpointV2,
  Provider,
} from "@aws-sdk/types";
export interface ClientInputEndpointParameters {
  region?: string | Provider<string>;
  useDualstackEndpoint?: boolean | Provider<boolean>;
  useFipsEndpoint?: boolean | Provider<boolean>;
  endpoint?:
    | string
    | Provider<string>
    | Endpoint
    | Provider<Endpoint>
    | EndpointV2
    | Provider<EndpointV2>;
  useGlobalEndpoint?: boolean | Provider<boolean>;
}
export declare type ClientResolvedEndpointParameters =
  ClientInputEndpointParameters & {
    defaultSigningName: string;
  };
export declare const resolveClientEndpointParameters: <T>(
  options: T & ClientInputEndpointParameters
) => T &
  ClientInputEndpointParameters & {
    defaultSigningName: string;
  };
export interface EndpointParameters extends __EndpointParameters {
  Region?: string;
  UseDualStack?: boolean;
  UseFIPS?: boolean;
  Endpoint?: string;
  UseGlobalEndpoint?: boolean;
}
