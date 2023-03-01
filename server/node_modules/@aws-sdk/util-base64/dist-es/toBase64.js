import { fromArrayBuffer } from "@aws-sdk/util-buffer-from";
export const toBase64 = (input) => fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("base64");
