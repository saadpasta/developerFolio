import { SSOClientConfig } from "./SSOClient";
export declare const getRuntimeConfig: (config: SSOClientConfig) => {
  apiVersion: string;
  base64Decoder: import("@aws-sdk/types").Decoder;
  base64Encoder: import("@aws-sdk/types").Encoder;
  disableHostPrefix: boolean;
  endpointProvider: (
    endpointParams: import("./endpoint/EndpointParameters").EndpointParameters,
    context?: {
      logger?: import("@aws-sdk/types").Logger | undefined;
    }
  ) => import("@aws-sdk/types").EndpointV2;
  logger: import("@aws-sdk/types").Logger;
  serviceId: string;
  urlParser: import("@aws-sdk/types").UrlParser;
  utf8Decoder: import("@aws-sdk/types").Decoder;
  utf8Encoder: import("@aws-sdk/types").Encoder;
};
