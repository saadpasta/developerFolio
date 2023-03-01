"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUID = exports.Binary = void 0;
var buffer_1 = require("buffer");
var ensure_buffer_1 = require("./ensure_buffer");
var uuid_utils_1 = require("./uuid_utils");
var utils_1 = require("./parser/utils");
var error_1 = require("./error");
var constants_1 = require("./constants");
/**
 * A class representation of the BSON Binary type.
 * @public
 * @category BSONType
 */
var Binary = /** @class */ (function () {
    /**
     * Create a new Binary instance.
     *
     * This constructor can accept a string as its first argument. In this case,
     * this string will be encoded using ISO-8859-1, **not** using UTF-8.
     * This is almost certainly not what you want. Use `new Binary(Buffer.from(string))`
     * instead to convert the string to a Buffer using UTF-8 first.
     *
     * @param buffer - a buffer object containing the binary data.
     * @param subType - the option binary type.
     */
    function Binary(buffer, subType) {
        if (!(this instanceof Binary))
            return new Binary(buffer, subType);
        if (!(buffer == null) &&
            !(typeof buffer === 'string') &&
            !ArrayBuffer.isView(buffer) &&
            !(buffer instanceof ArrayBuffer) &&
            !Array.isArray(buffer)) {
            throw new error_1.BSONTypeError('Binary can only be constructed from string, Buffer, TypedArray, or Array<number>');
        }
        this.sub_type = subType !== null && subType !== void 0 ? subType : Binary.BSON_BINARY_SUBTYPE_DEFAULT;
        if (buffer == null) {
            // create an empty binary buffer
            this.buffer = buffer_1.Buffer.alloc(Binary.BUFFER_SIZE);
            this.position = 0;
        }
        else {
            if (typeof buffer === 'string') {
                // string
                this.buffer = buffer_1.Buffer.from(buffer, 'binary');
            }
            else if (Array.isArray(buffer)) {
                // number[]
                this.buffer = buffer_1.Buffer.from(buffer);
            }
            else {
                // Buffer | TypedArray | ArrayBuffer
                this.buffer = (0, ensure_buffer_1.ensureBuffer)(buffer);
            }
            this.position = this.buffer.byteLength;
        }
    }
    /**
     * Updates this binary with byte_value.
     *
     * @param byteValue - a single byte we wish to write.
     */
    Binary.prototype.put = function (byteValue) {
        // If it's a string and a has more than one character throw an error
        if (typeof byteValue === 'string' && byteValue.length !== 1) {
            throw new error_1.BSONTypeError('only accepts single character String');
        }
        else if (typeof byteValue !== 'number' && byteValue.length !== 1)
            throw new error_1.BSONTypeError('only accepts single character Uint8Array or Array');
        // Decode the byte value once
        var decodedByte;
        if (typeof byteValue === 'string') {
            decodedByte = byteValue.charCodeAt(0);
        }
        else if (typeof byteValue === 'number') {
            decodedByte = byteValue;
        }
        else {
            decodedByte = byteValue[0];
        }
        if (decodedByte < 0 || decodedByte > 255) {
            throw new error_1.BSONTypeError('only accepts number in a valid unsigned byte range 0-255');
        }
        if (this.buffer.length > this.position) {
            this.buffer[this.position++] = decodedByte;
        }
        else {
            var buffer = buffer_1.Buffer.alloc(Binary.BUFFER_SIZE + this.buffer.length);
            // Combine the two buffers together
            this.buffer.copy(buffer, 0, 0, this.buffer.length);
            this.buffer = buffer;
            this.buffer[this.position++] = decodedByte;
        }
    };
    /**
     * Writes a buffer or string to the binary.
     *
     * @param sequence - a string or buffer to be written to the Binary BSON object.
     * @param offset - specify the binary of where to write the content.
     */
    Binary.prototype.write = function (sequence, offset) {
        offset = typeof offset === 'number' ? offset : this.position;
        // If the buffer is to small let's extend the buffer
        if (this.buffer.length < offset + sequence.length) {
            var buffer = buffer_1.Buffer.alloc(this.buffer.length + sequence.length);
            this.buffer.copy(buffer, 0, 0, this.buffer.length);
            // Assign the new buffer
            this.buffer = buffer;
        }
        if (ArrayBuffer.isView(sequence)) {
            this.buffer.set((0, ensure_buffer_1.ensureBuffer)(sequence), offset);
            this.position =
                offset + sequence.byteLength > this.position ? offset + sequence.length : this.position;
        }
        else if (typeof sequence === 'string') {
            this.buffer.write(sequence, offset, sequence.length, 'binary');
            this.position =
                offset + sequence.length > this.position ? offset + sequence.length : this.position;
        }
    };
    /**
     * Reads **length** bytes starting at **position**.
     *
     * @param position - read from the given position in the Binary.
     * @param length - the number of bytes to read.
     */
    Binary.prototype.read = function (position, length) {
        length = length && length > 0 ? length : this.position;
        // Let's return the data based on the type we have
        return this.buffer.slice(position, position + length);
    };
    /**
     * Returns the value of this binary as a string.
     * @param asRaw - Will skip converting to a string
     * @remarks
     * This is handy when calling this function conditionally for some key value pairs and not others
     */
    Binary.prototype.value = function (asRaw) {
        asRaw = !!asRaw;
        // Optimize to serialize for the situation where the data == size of buffer
        if (asRaw && this.buffer.length === this.position) {
            return this.buffer;
        }
        // If it's a node.js buffer object
        if (asRaw) {
            return this.buffer.slice(0, this.position);
        }
        return this.buffer.toString('binary', 0, this.position);
    };
    /** the length of the binary sequence */
    Binary.prototype.length = function () {
        return this.position;
    };
    Binary.prototype.toJSON = function () {
        return this.buffer.toString('base64');
    };
    Binary.prototype.toString = function (format) {
        return this.buffer.toString(format);
    };
    /** @internal */
    Binary.prototype.toExtendedJSON = function (options) {
        options = options || {};
        var base64String = this.buffer.toString('base64');
        var subType = Number(this.sub_type).toString(16);
        if (options.legacy) {
            return {
                $binary: base64String,
                $type: subType.length === 1 ? '0' + subType : subType
            };
        }
        return {
            $binary: {
                base64: base64String,
                subType: subType.length === 1 ? '0' + subType : subType
            }
        };
    };
    Binary.prototype.toUUID = function () {
        if (this.sub_type === Binary.SUBTYPE_UUID) {
            return new UUID(this.buffer.slice(0, this.position));
        }
        throw new error_1.BSONError("Binary sub_type \"".concat(this.sub_type, "\" is not supported for converting to UUID. Only \"").concat(Binary.SUBTYPE_UUID, "\" is currently supported."));
    };
    /** @internal */
    Binary.fromExtendedJSON = function (doc, options) {
        options = options || {};
        var data;
        var type;
        if ('$binary' in doc) {
            if (options.legacy && typeof doc.$binary === 'string' && '$type' in doc) {
                type = doc.$type ? parseInt(doc.$type, 16) : 0;
                data = buffer_1.Buffer.from(doc.$binary, 'base64');
            }
            else {
                if (typeof doc.$binary !== 'string') {
                    type = doc.$binary.subType ? parseInt(doc.$binary.subType, 16) : 0;
                    data = buffer_1.Buffer.from(doc.$binary.base64, 'base64');
                }
            }
        }
        else if ('$uuid' in doc) {
            type = 4;
            data = (0, uuid_utils_1.uuidHexStringToBuffer)(doc.$uuid);
        }
        if (!data) {
            throw new error_1.BSONTypeError("Unexpected Binary Extended JSON format ".concat(JSON.stringify(doc)));
        }
        return type === constants_1.BSON_BINARY_SUBTYPE_UUID_NEW ? new UUID(data) : new Binary(data, type);
    };
    /** @internal */
    Binary.prototype[Symbol.for('nodejs.util.inspect.custom')] = function () {
        return this.inspect();
    };
    Binary.prototype.inspect = function () {
        var asBuffer = this.value(true);
        return "new Binary(Buffer.from(\"".concat(asBuffer.toString('hex'), "\", \"hex\"), ").concat(this.sub_type, ")");
    };
    /**
     * Binary default subtype
     * @internal
     */
    Binary.BSON_BINARY_SUBTYPE_DEFAULT = 0;
    /** Initial buffer default size */
    Binary.BUFFER_SIZE = 256;
    /** Default BSON type */
    Binary.SUBTYPE_DEFAULT = 0;
    /** Function BSON type */
    Binary.SUBTYPE_FUNCTION = 1;
    /** Byte Array BSON type */
    Binary.SUBTYPE_BYTE_ARRAY = 2;
    /** Deprecated UUID BSON type @deprecated Please use SUBTYPE_UUID */
    Binary.SUBTYPE_UUID_OLD = 3;
    /** UUID BSON type */
    Binary.SUBTYPE_UUID = 4;
    /** MD5 BSON type */
    Binary.SUBTYPE_MD5 = 5;
    /** Encrypted BSON type */
    Binary.SUBTYPE_ENCRYPTED = 6;
    /** Column BSON type */
    Binary.SUBTYPE_COLUMN = 7;
    /** User BSON type */
    Binary.SUBTYPE_USER_DEFINED = 128;
    return Binary;
}());
exports.Binary = Binary;
Object.defineProperty(Binary.prototype, '_bsontype', { value: 'Binary' });
var UUID_BYTE_LENGTH = 16;
/**
 * A class representation of the BSON UUID type.
 * @public
 */
var UUID = /** @class */ (function (_super) {
    __extends(UUID, _super);
    /**
     * Create an UUID type
     *
     * @param input - Can be a 32 or 36 character hex string (dashes excluded/included) or a 16 byte binary Buffer.
     */
    function UUID(input) {
        var _this = this;
        var bytes;
        var hexStr;
        if (input == null) {
            bytes = UUID.generate();
        }
        else if (input instanceof UUID) {
            bytes = buffer_1.Buffer.from(input.buffer);
            hexStr = input.__id;
        }
        else if (ArrayBuffer.isView(input) && input.byteLength === UUID_BYTE_LENGTH) {
            bytes = (0, ensure_buffer_1.ensureBuffer)(input);
        }
        else if (typeof input === 'string') {
            bytes = (0, uuid_utils_1.uuidHexStringToBuffer)(input);
        }
        else {
            throw new error_1.BSONTypeError('Argument passed in UUID constructor must be a UUID, a 16 byte Buffer or a 32/36 character hex string (dashes excluded/included, format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).');
        }
        _this = _super.call(this, bytes, constants_1.BSON_BINARY_SUBTYPE_UUID_NEW) || this;
        _this.__id = hexStr;
        return _this;
    }
    Object.defineProperty(UUID.prototype, "id", {
        /**
         * The UUID bytes
         * @readonly
         */
        get: function () {
            return this.buffer;
        },
        set: function (value) {
            this.buffer = value;
            if (UUID.cacheHexString) {
                this.__id = (0, uuid_utils_1.bufferToUuidHexString)(value);
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns the UUID id as a 32 or 36 character hex string representation, excluding/including dashes (defaults to 36 character dash separated)
     * @param includeDashes - should the string exclude dash-separators.
     * */
    UUID.prototype.toHexString = function (includeDashes) {
        if (includeDashes === void 0) { includeDashes = true; }
        if (UUID.cacheHexString && this.__id) {
            return this.__id;
        }
        var uuidHexString = (0, uuid_utils_1.bufferToUuidHexString)(this.id, includeDashes);
        if (UUID.cacheHexString) {
            this.__id = uuidHexString;
        }
        return uuidHexString;
    };
    /**
     * Converts the id into a 36 character (dashes included) hex string, unless a encoding is specified.
     */
    UUID.prototype.toString = function (encoding) {
        return encoding ? this.id.toString(encoding) : this.toHexString();
    };
    /**
     * Converts the id into its JSON string representation.
     * A 36 character (dashes included) hex string in the format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
     */
    UUID.prototype.toJSON = function () {
        return this.toHexString();
    };
    /**
     * Compares the equality of this UUID with `otherID`.
     *
     * @param otherId - UUID instance to compare against.
     */
    UUID.prototype.equals = function (otherId) {
        if (!otherId) {
            return false;
        }
        if (otherId instanceof UUID) {
            return otherId.id.equals(this.id);
        }
        try {
            return new UUID(otherId).id.equals(this.id);
        }
        catch (_a) {
            return false;
        }
    };
    /**
     * Creates a Binary instance from the current UUID.
     */
    UUID.prototype.toBinary = function () {
        return new Binary(this.id, Binary.SUBTYPE_UUID);
    };
    /**
     * Generates a populated buffer containing a v4 uuid
     */
    UUID.generate = function () {
        var bytes = (0, utils_1.randomBytes)(UUID_BYTE_LENGTH);
        // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
        // Kindly borrowed from https://github.com/uuidjs/uuid/blob/master/src/v4.js
        bytes[6] = (bytes[6] & 0x0f) | 0x40;
        bytes[8] = (bytes[8] & 0x3f) | 0x80;
        return buffer_1.Buffer.from(bytes);
    };
    /**
     * Checks if a value is a valid bson UUID
     * @param input - UUID, string or Buffer to validate.
     */
    UUID.isValid = function (input) {
        if (!input) {
            return false;
        }
        if (input instanceof UUID) {
            return true;
        }
        if (typeof input === 'string') {
            return (0, uuid_utils_1.uuidValidateString)(input);
        }
        if ((0, utils_1.isUint8Array)(input)) {
            // check for length & uuid version (https://tools.ietf.org/html/rfc4122#section-4.1.3)
            if (input.length !== UUID_BYTE_LENGTH) {
                return false;
            }
            return (input[6] & 0xf0) === 0x40 && (input[8] & 0x80) === 0x80;
        }
        return false;
    };
    /**
     * Creates an UUID from a hex string representation of an UUID.
     * @param hexString - 32 or 36 character hex string (dashes excluded/included).
     */
    UUID.createFromHexString = function (hexString) {
        var buffer = (0, uuid_utils_1.uuidHexStringToBuffer)(hexString);
        return new UUID(buffer);
    };
    /**
     * Converts to a string representation of this Id.
     *
     * @returns return the 36 character hex string representation.
     * @internal
     */
    UUID.prototype[Symbol.for('nodejs.util.inspect.custom')] = function () {
        return this.inspect();
    };
    UUID.prototype.inspect = function () {
        return "new UUID(\"".concat(this.toHexString(), "\")");
    };
    return UUID;
}(Binary));
exports.UUID = UUID;
//# sourceMappingURL=binary.js.map