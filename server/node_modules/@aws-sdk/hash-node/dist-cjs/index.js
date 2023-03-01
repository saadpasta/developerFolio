"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hash = void 0;
const util_buffer_from_1 = require("@aws-sdk/util-buffer-from");
const util_utf8_1 = require("@aws-sdk/util-utf8");
const buffer_1 = require("buffer");
const crypto_1 = require("crypto");
class Hash {
    constructor(algorithmIdentifier, secret) {
        this.algorithmIdentifier = algorithmIdentifier;
        this.secret = secret;
        this.reset();
    }
    update(toHash, encoding) {
        this.hash.update((0, util_utf8_1.toUint8Array)(castSourceData(toHash, encoding)));
    }
    digest() {
        return Promise.resolve(this.hash.digest());
    }
    reset() {
        this.hash = this.secret
            ? (0, crypto_1.createHmac)(this.algorithmIdentifier, castSourceData(this.secret))
            : (0, crypto_1.createHash)(this.algorithmIdentifier);
    }
}
exports.Hash = Hash;
function castSourceData(toCast, encoding) {
    if (buffer_1.Buffer.isBuffer(toCast)) {
        return toCast;
    }
    if (typeof toCast === "string") {
        return (0, util_buffer_from_1.fromString)(toCast, encoding);
    }
    if (ArrayBuffer.isView(toCast)) {
        return (0, util_buffer_from_1.fromArrayBuffer)(toCast.buffer, toCast.byteOffset, toCast.byteLength);
    }
    return (0, util_buffer_from_1.fromArrayBuffer)(toCast);
}
