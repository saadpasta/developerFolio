import { HttpRequest } from "./http";
import { FinalizeHandler, FinalizeHandlerArguments, FinalizeHandlerOutput, HandlerExecutionContext } from "./middleware";
import { MetadataBearer } from "./response";
/**
 * An event stream message. The headers and body properties will always be
 * defined, with empty headers represented as an object with no keys and an
 * empty body represented as a zero-length Uint8Array.
 */
export interface Message {
    headers: MessageHeaders;
    body: Uint8Array;
}
export declare type MessageHeaders = Record<string, MessageHeaderValue>;
export interface BooleanHeaderValue {
    type: "boolean";
    value: boolean;
}
export interface ByteHeaderValue {
    type: "byte";
    value: number;
}
export interface ShortHeaderValue {
    type: "short";
    value: number;
}
export interface IntegerHeaderValue {
    type: "integer";
    value: number;
}
export interface LongHeaderValue {
    type: "long";
    value: Int64;
}
export interface BinaryHeaderValue {
    type: "binary";
    value: Uint8Array;
}
export interface StringHeaderValue {
    type: "string";
    value: string;
}
export interface TimestampHeaderValue {
    type: "timestamp";
    value: Date;
}
export interface UuidHeaderValue {
    type: "uuid";
    value: string;
}
export declare type MessageHeaderValue = BooleanHeaderValue | ByteHeaderValue | ShortHeaderValue | IntegerHeaderValue | LongHeaderValue | BinaryHeaderValue | StringHeaderValue | TimestampHeaderValue | UuidHeaderValue;
export interface Int64 {
    readonly bytes: Uint8Array;
    valueOf: () => number;
    toString: () => string;
}
/**
 * Util functions for serializing or deserializing event stream
 */
export interface EventStreamSerdeContext {
    eventStreamMarshaller: EventStreamMarshaller;
}
/**
 * A function which deserializes binary event stream message into modeled shape.
 */
export interface EventStreamMarshallerDeserFn<StreamType> {
    <T>(body: StreamType, deserializer: (input: Record<string, Message>) => Promise<T>): AsyncIterable<T>;
}
/**
 * A function that serializes modeled shape into binary stream message.
 */
export interface EventStreamMarshallerSerFn<StreamType> {
    <T>(input: AsyncIterable<T>, serializer: (event: T) => Message): StreamType;
}
/**
 * An interface which provides functions for serializing and deserializing binary event stream
 * to/from corresponsing modeled shape.
 */
export interface EventStreamMarshaller<StreamType = any> {
    deserialize: EventStreamMarshallerDeserFn<StreamType>;
    serialize: EventStreamMarshallerSerFn<StreamType>;
}
export interface EventStreamRequestSigner {
    sign(request: HttpRequest): Promise<HttpRequest>;
}
export interface EventStreamPayloadHandler {
    handle: <Input extends object, Output extends MetadataBearer>(next: FinalizeHandler<Input, Output>, args: FinalizeHandlerArguments<Input>, context?: HandlerExecutionContext) => Promise<FinalizeHandlerOutput<Output>>;
}
export interface EventStreamPayloadHandlerProvider {
    (options: any): EventStreamPayloadHandler;
}
export interface EventStreamSerdeProvider {
    (options: any): EventStreamMarshaller;
}
export interface EventStreamSignerProvider {
    (options: any): EventStreamRequestSigner;
}
