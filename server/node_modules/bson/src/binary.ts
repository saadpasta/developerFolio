import { Buffer } from 'buffer';
import { ensureBuffer } from './ensure_buffer';
import { bufferToUuidHexString, uuidHexStringToBuffer, uuidValidateString } from './uuid_utils';
import { isUint8Array, randomBytes } from './parser/utils';
import type { EJSONOptions } from './extended_json';
import { BSONError, BSONTypeError } from './error';
import { BSON_BINARY_SUBTYPE_UUID_NEW } from './constants';

/** @public */
export type BinarySequence = Uint8Array | Buffer | number[];

/** @public */
export interface BinaryExtendedLegacy {
  $type: string;
  $binary: string;
}

/** @public */
export interface BinaryExtended {
  $binary: {
    subType: string;
    base64: string;
  };
}

/**
 * A class representation of the BSON Binary type.
 * @public
 * @category BSONType
 */
export class Binary {
  _bsontype!: 'Binary';

  /**
   * Binary default subtype
   * @internal
   */
  private static readonly BSON_BINARY_SUBTYPE_DEFAULT = 0;

  /** Initial buffer default size */
  static readonly BUFFER_SIZE = 256;
  /** Default BSON type */
  static readonly SUBTYPE_DEFAULT = 0;
  /** Function BSON type */
  static readonly SUBTYPE_FUNCTION = 1;
  /** Byte Array BSON type */
  static readonly SUBTYPE_BYTE_ARRAY = 2;
  /** Deprecated UUID BSON type @deprecated Please use SUBTYPE_UUID */
  static readonly SUBTYPE_UUID_OLD = 3;
  /** UUID BSON type */
  static readonly SUBTYPE_UUID = 4;
  /** MD5 BSON type */
  static readonly SUBTYPE_MD5 = 5;
  /** Encrypted BSON type */
  static readonly SUBTYPE_ENCRYPTED = 6;
  /** Column BSON type */
  static readonly SUBTYPE_COLUMN = 7;
  /** User BSON type */
  static readonly SUBTYPE_USER_DEFINED = 128;

  buffer!: Buffer;
  sub_type!: number;
  position!: number;

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
  constructor(buffer?: string | BinarySequence, subType?: number) {
    if (!(this instanceof Binary)) return new Binary(buffer, subType);

    if (
      !(buffer == null) &&
      !(typeof buffer === 'string') &&
      !ArrayBuffer.isView(buffer) &&
      !(buffer instanceof ArrayBuffer) &&
      !Array.isArray(buffer)
    ) {
      throw new BSONTypeError(
        'Binary can only be constructed from string, Buffer, TypedArray, or Array<number>'
      );
    }

    this.sub_type = subType ?? Binary.BSON_BINARY_SUBTYPE_DEFAULT;

    if (buffer == null) {
      // create an empty binary buffer
      this.buffer = Buffer.alloc(Binary.BUFFER_SIZE);
      this.position = 0;
    } else {
      if (typeof buffer === 'string') {
        // string
        this.buffer = Buffer.from(buffer, 'binary');
      } else if (Array.isArray(buffer)) {
        // number[]
        this.buffer = Buffer.from(buffer);
      } else {
        // Buffer | TypedArray | ArrayBuffer
        this.buffer = ensureBuffer(buffer);
      }

      this.position = this.buffer.byteLength;
    }
  }

  /**
   * Updates this binary with byte_value.
   *
   * @param byteValue - a single byte we wish to write.
   */
  put(byteValue: string | number | Uint8Array | Buffer | number[]): void {
    // If it's a string and a has more than one character throw an error
    if (typeof byteValue === 'string' && byteValue.length !== 1) {
      throw new BSONTypeError('only accepts single character String');
    } else if (typeof byteValue !== 'number' && byteValue.length !== 1)
      throw new BSONTypeError('only accepts single character Uint8Array or Array');

    // Decode the byte value once
    let decodedByte: number;
    if (typeof byteValue === 'string') {
      decodedByte = byteValue.charCodeAt(0);
    } else if (typeof byteValue === 'number') {
      decodedByte = byteValue;
    } else {
      decodedByte = byteValue[0];
    }

    if (decodedByte < 0 || decodedByte > 255) {
      throw new BSONTypeError('only accepts number in a valid unsigned byte range 0-255');
    }

    if (this.buffer.length > this.position) {
      this.buffer[this.position++] = decodedByte;
    } else {
      const buffer = Buffer.alloc(Binary.BUFFER_SIZE + this.buffer.length);
      // Combine the two buffers together
      this.buffer.copy(buffer, 0, 0, this.buffer.length);
      this.buffer = buffer;
      this.buffer[this.position++] = decodedByte;
    }
  }

  /**
   * Writes a buffer or string to the binary.
   *
   * @param sequence - a string or buffer to be written to the Binary BSON object.
   * @param offset - specify the binary of where to write the content.
   */
  write(sequence: string | BinarySequence, offset: number): void {
    offset = typeof offset === 'number' ? offset : this.position;

    // If the buffer is to small let's extend the buffer
    if (this.buffer.length < offset + sequence.length) {
      const buffer = Buffer.alloc(this.buffer.length + sequence.length);
      this.buffer.copy(buffer, 0, 0, this.buffer.length);

      // Assign the new buffer
      this.buffer = buffer;
    }

    if (ArrayBuffer.isView(sequence)) {
      this.buffer.set(ensureBuffer(sequence), offset);
      this.position =
        offset + sequence.byteLength > this.position ? offset + sequence.length : this.position;
    } else if (typeof sequence === 'string') {
      this.buffer.write(sequence, offset, sequence.length, 'binary');
      this.position =
        offset + sequence.length > this.position ? offset + sequence.length : this.position;
    }
  }

  /**
   * Reads **length** bytes starting at **position**.
   *
   * @param position - read from the given position in the Binary.
   * @param length - the number of bytes to read.
   */
  read(position: number, length: number): BinarySequence {
    length = length && length > 0 ? length : this.position;

    // Let's return the data based on the type we have
    return this.buffer.slice(position, position + length);
  }

  /**
   * Returns the value of this binary as a string.
   * @param asRaw - Will skip converting to a string
   * @remarks
   * This is handy when calling this function conditionally for some key value pairs and not others
   */
  value(asRaw?: boolean): string | BinarySequence {
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
  }

  /** the length of the binary sequence */
  length(): number {
    return this.position;
  }

  toJSON(): string {
    return this.buffer.toString('base64');
  }

  toString(format?: string): string {
    return this.buffer.toString(format);
  }

  /** @internal */
  toExtendedJSON(options?: EJSONOptions): BinaryExtendedLegacy | BinaryExtended {
    options = options || {};
    const base64String = this.buffer.toString('base64');

    const subType = Number(this.sub_type).toString(16);
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
  }

  toUUID(): UUID {
    if (this.sub_type === Binary.SUBTYPE_UUID) {
      return new UUID(this.buffer.slice(0, this.position));
    }

    throw new BSONError(
      `Binary sub_type "${this.sub_type}" is not supported for converting to UUID. Only "${Binary.SUBTYPE_UUID}" is currently supported.`
    );
  }

  /** @internal */
  static fromExtendedJSON(
    doc: BinaryExtendedLegacy | BinaryExtended | UUIDExtended,
    options?: EJSONOptions
  ): Binary {
    options = options || {};
    let data: Buffer | undefined;
    let type;
    if ('$binary' in doc) {
      if (options.legacy && typeof doc.$binary === 'string' && '$type' in doc) {
        type = doc.$type ? parseInt(doc.$type, 16) : 0;
        data = Buffer.from(doc.$binary, 'base64');
      } else {
        if (typeof doc.$binary !== 'string') {
          type = doc.$binary.subType ? parseInt(doc.$binary.subType, 16) : 0;
          data = Buffer.from(doc.$binary.base64, 'base64');
        }
      }
    } else if ('$uuid' in doc) {
      type = 4;
      data = uuidHexStringToBuffer(doc.$uuid);
    }
    if (!data) {
      throw new BSONTypeError(`Unexpected Binary Extended JSON format ${JSON.stringify(doc)}`);
    }
    return type === BSON_BINARY_SUBTYPE_UUID_NEW ? new UUID(data) : new Binary(data, type);
  }

  /** @internal */
  [Symbol.for('nodejs.util.inspect.custom')](): string {
    return this.inspect();
  }

  inspect(): string {
    const asBuffer = this.value(true);
    return `new Binary(Buffer.from("${asBuffer.toString('hex')}", "hex"), ${this.sub_type})`;
  }
}

Object.defineProperty(Binary.prototype, '_bsontype', { value: 'Binary' });

/** @public */
export type UUIDExtended = {
  $uuid: string;
};
const UUID_BYTE_LENGTH = 16;

/**
 * A class representation of the BSON UUID type.
 * @public
 */
export class UUID extends Binary {
  static cacheHexString: boolean;

  /** UUID hexString cache @internal */
  private __id?: string;

  /**
   * Create an UUID type
   *
   * @param input - Can be a 32 or 36 character hex string (dashes excluded/included) or a 16 byte binary Buffer.
   */
  constructor(input?: string | Buffer | UUID) {
    let bytes;
    let hexStr;
    if (input == null) {
      bytes = UUID.generate();
    } else if (input instanceof UUID) {
      bytes = Buffer.from(input.buffer);
      hexStr = input.__id;
    } else if (ArrayBuffer.isView(input) && input.byteLength === UUID_BYTE_LENGTH) {
      bytes = ensureBuffer(input);
    } else if (typeof input === 'string') {
      bytes = uuidHexStringToBuffer(input);
    } else {
      throw new BSONTypeError(
        'Argument passed in UUID constructor must be a UUID, a 16 byte Buffer or a 32/36 character hex string (dashes excluded/included, format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).'
      );
    }
    super(bytes, BSON_BINARY_SUBTYPE_UUID_NEW);
    this.__id = hexStr;
  }

  /**
   * The UUID bytes
   * @readonly
   */
  get id(): Buffer {
    return this.buffer;
  }

  set id(value: Buffer) {
    this.buffer = value;

    if (UUID.cacheHexString) {
      this.__id = bufferToUuidHexString(value);
    }
  }

  /**
   * Returns the UUID id as a 32 or 36 character hex string representation, excluding/including dashes (defaults to 36 character dash separated)
   * @param includeDashes - should the string exclude dash-separators.
   * */
  toHexString(includeDashes = true): string {
    if (UUID.cacheHexString && this.__id) {
      return this.__id;
    }

    const uuidHexString = bufferToUuidHexString(this.id, includeDashes);

    if (UUID.cacheHexString) {
      this.__id = uuidHexString;
    }

    return uuidHexString;
  }

  /**
   * Converts the id into a 36 character (dashes included) hex string, unless a encoding is specified.
   */
  toString(encoding?: string): string {
    return encoding ? this.id.toString(encoding) : this.toHexString();
  }

  /**
   * Converts the id into its JSON string representation.
   * A 36 character (dashes included) hex string in the format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  toJSON(): string {
    return this.toHexString();
  }

  /**
   * Compares the equality of this UUID with `otherID`.
   *
   * @param otherId - UUID instance to compare against.
   */
  equals(otherId: string | Buffer | UUID): boolean {
    if (!otherId) {
      return false;
    }

    if (otherId instanceof UUID) {
      return otherId.id.equals(this.id);
    }

    try {
      return new UUID(otherId).id.equals(this.id);
    } catch {
      return false;
    }
  }

  /**
   * Creates a Binary instance from the current UUID.
   */
  toBinary(): Binary {
    return new Binary(this.id, Binary.SUBTYPE_UUID);
  }

  /**
   * Generates a populated buffer containing a v4 uuid
   */
  static generate(): Buffer {
    const bytes = randomBytes(UUID_BYTE_LENGTH);

    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    // Kindly borrowed from https://github.com/uuidjs/uuid/blob/master/src/v4.js
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;

    return Buffer.from(bytes);
  }

  /**
   * Checks if a value is a valid bson UUID
   * @param input - UUID, string or Buffer to validate.
   */
  static isValid(input: string | Buffer | UUID): boolean {
    if (!input) {
      return false;
    }

    if (input instanceof UUID) {
      return true;
    }

    if (typeof input === 'string') {
      return uuidValidateString(input);
    }

    if (isUint8Array(input)) {
      // check for length & uuid version (https://tools.ietf.org/html/rfc4122#section-4.1.3)
      if (input.length !== UUID_BYTE_LENGTH) {
        return false;
      }

      return (input[6] & 0xf0) === 0x40 && (input[8] & 0x80) === 0x80;
    }

    return false;
  }

  /**
   * Creates an UUID from a hex string representation of an UUID.
   * @param hexString - 32 or 36 character hex string (dashes excluded/included).
   */
  static createFromHexString(hexString: string): UUID {
    const buffer = uuidHexStringToBuffer(hexString);
    return new UUID(buffer);
  }

  /**
   * Converts to a string representation of this Id.
   *
   * @returns return the 36 character hex string representation.
   * @internal
   */
  [Symbol.for('nodejs.util.inspect.custom')](): string {
    return this.inspect();
  }

  inspect(): string {
    return `new UUID("${this.toHexString()}")`;
  }
}
