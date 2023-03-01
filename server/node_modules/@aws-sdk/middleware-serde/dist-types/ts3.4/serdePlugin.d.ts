import {
  DeserializeHandlerOptions,
  Endpoint,
  EndpointBearer,
  MetadataBearer,
  Pluggable,
  Provider,
  RequestSerializer,
  ResponseDeserializer,
  SerializeHandlerOptions,
  UrlParser,
} from "@aws-sdk/types";
export declare const deserializerMiddlewareOption: DeserializeHandlerOptions;
export declare const serializerMiddlewareOption: SerializeHandlerOptions;
export declare type V1OrV2Endpoint = {
  urlParser?: UrlParser;
  endpoint?: Provider<Endpoint>;
};
export declare function getSerdePlugin<
  InputType extends object,
  SerDeContext,
  OutputType extends MetadataBearer
>(
  config: V1OrV2Endpoint,
  serializer: RequestSerializer<any, SerDeContext & EndpointBearer>,
  deserializer: ResponseDeserializer<OutputType, any, SerDeContext>
): Pluggable<InputType, OutputType>;
