import {
  Endpoint,
  EndpointParameters,
  EndpointV2,
  Logger,
  Provider,
  UrlParser,
} from "@aws-sdk/types";
export interface EndpointInputConfig<
  T extends EndpointParameters = EndpointParameters
> {
  endpoint?:
    | string
    | Endpoint
    | Provider<Endpoint>
    | EndpointV2
    | Provider<EndpointV2>;
  endpointProvider?: (
    params: T,
    context?: {
      logger?: Logger;
    }
  ) => EndpointV2;
  tls?: boolean;
  useDualstackEndpoint?: boolean | Provider<boolean>;
  useFipsEndpoint?: boolean | Provider<boolean>;
}
interface PreviouslyResolved<
  T extends EndpointParameters = EndpointParameters
> {
  urlParser: UrlParser;
  region: Provider<string>;
  endpointProvider: (
    params: T,
    context?: {
      logger?: Logger;
    }
  ) => EndpointV2;
  logger?: Logger;
}
export interface EndpointResolvedConfig<
  T extends EndpointParameters = EndpointParameters
> {
  endpoint?: Provider<Endpoint>;
  endpointProvider: (
    params: T,
    context?: {
      logger?: Logger;
    }
  ) => EndpointV2;
  tls: boolean;
  isCustomEndpoint?: boolean;
  useDualstackEndpoint: Provider<boolean>;
  useFipsEndpoint: Provider<boolean>;
}
export declare const resolveEndpointConfig: <
  T,
  P extends EndpointParameters = EndpointParameters
>(
  input: T & EndpointInputConfig<P> & PreviouslyResolved<P>
) => T & EndpointResolvedConfig<P>;
export {};
