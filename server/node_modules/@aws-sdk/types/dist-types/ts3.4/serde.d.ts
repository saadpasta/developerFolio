import { Endpoint } from "./http";
import { RequestHandler } from "./transfer";
import { Decoder, Encoder, Provider } from "./util";
export interface EndpointBearer {
  endpoint: Provider<Endpoint>;
}
export interface StreamCollector {
  (stream: any): Promise<Uint8Array>;
}
export interface SerdeContext extends EndpointBearer {
  base64Encoder: Encoder;
  base64Decoder: Decoder;
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
  streamCollector: StreamCollector;
  requestHandler: RequestHandler<any, any>;
  disableHostPrefix: boolean;
}
export interface RequestSerializer<
  Request,
  Context extends EndpointBearer = any
> {
  (input: any, context: Context): Promise<Request>;
}
export interface ResponseDeserializer<
  OutputType,
  ResponseType = any,
  Context = any
> {
  (output: ResponseType, context: Context): Promise<OutputType>;
}
declare global {
  export interface ReadableStream {}
  export interface Blob {}
}
export interface SdkStreamMixin {
  transformToByteArray: () => Promise<Uint8Array>;
  transformToString: (encoding?: string) => Promise<string>;
  transformToWebStream: () => ReadableStream;
}
export declare type SdkStream<BaseStream> = BaseStream & SdkStreamMixin;
export declare type WithSdkStreamMixin<T, StreamKey extends keyof T> = {
  [key in keyof T]: key extends StreamKey ? SdkStream<T[StreamKey]> : T[key];
};
export interface SdkStreamMixinInjector {
  (stream: unknown): SdkStreamMixin;
}
export interface SdkStreamSerdeContext {
  sdkStreamMixin: SdkStreamMixinInjector;
}
