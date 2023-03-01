import { Endpoint } from "./http";
import { RequestHandler } from "./transfer";
import { Decoder, Encoder, Provider } from "./util";
/**
 * Interface for object requires an Endpoint set.
 */
export interface EndpointBearer {
    endpoint: Provider<Endpoint>;
}
export interface StreamCollector {
    /**
     * A function that converts a stream into an array of bytes.
     *
     * @param stream  The low-level native stream from browser or Nodejs runtime
     */
    (stream: any): Promise<Uint8Array>;
}
/**
 * Request and Response serde util functions and settings for AWS services
 */
export interface SerdeContext extends EndpointBearer {
    base64Encoder: Encoder;
    base64Decoder: Decoder;
    utf8Encoder: Encoder;
    utf8Decoder: Decoder;
    streamCollector: StreamCollector;
    requestHandler: RequestHandler<any, any>;
    disableHostPrefix: boolean;
}
export interface RequestSerializer<Request, Context extends EndpointBearer = any> {
    /**
     * Converts the provided `input` into a request object
     *
     * @param input     The user input to serialize.
     *
     * @param context    Context containing runtime-specific util functions.
     */
    (input: any, context: Context): Promise<Request>;
}
export interface ResponseDeserializer<OutputType, ResponseType = any, Context = any> {
    /**
     * Converts the output of an operation into JavaScript types.
     *
     * @param output     The HTTP response received from the service
     *
     * @param context    context containing runtime-specific util functions.
     */
    (output: ResponseType, context: Context): Promise<OutputType>;
}
/**
 * Declare DOM interfaces in case dom.d.ts is not added to the tsconfig lib, causing
 * interfaces to not be defined. For developers with dom.d.ts added, the interfaces will
 * be merged correctly.
 *
 * This is also required for any clients with streaming interfaces where the corresponding
 * types are also referred. The type is only declared here once since this @aws-sdk/types
 * is depended by all @aws-sdk packages.
 */
declare global {
    export interface ReadableStream {
    }
    export interface Blob {
    }
}
/**
 * The interface contains mix-in utility functions to transfer the runtime-specific
 * stream implementation to specified format. Each stream can ONLY be transformed
 * once.
 */
export interface SdkStreamMixin {
    transformToByteArray: () => Promise<Uint8Array>;
    transformToString: (encoding?: string) => Promise<string>;
    transformToWebStream: () => ReadableStream;
}
/**
 * The type describing a runtime-specific stream implementation with mix-in
 * utility functions.
 */
export declare type SdkStream<BaseStream> = BaseStream & SdkStreamMixin;
/**
 * Indicates that the member of type T with
 * key StreamKey have been extended
 * with the SdkStreamMixin helper methods.
 */
export declare type WithSdkStreamMixin<T, StreamKey extends keyof T> = {
    [key in keyof T]: key extends StreamKey ? SdkStream<T[StreamKey]> : T[key];
};
/**
 * Interface for internal function to inject stream utility functions
 * implementation
 *
 * @internal
 */
export interface SdkStreamMixinInjector {
    (stream: unknown): SdkStreamMixin;
}
/**
 * @internal
 */
export interface SdkStreamSerdeContext {
    sdkStreamMixin: SdkStreamMixinInjector;
}
