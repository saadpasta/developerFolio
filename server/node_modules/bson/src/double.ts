import type { EJSONOptions } from './extended_json';

/** @public */
export interface DoubleExtended {
  $numberDouble: string;
}

/**
 * A class representation of the BSON Double type.
 * @public
 * @category BSONType
 */
export class Double {
  _bsontype!: 'Double';

  value!: number;
  /**
   * Create a Double type
   *
   * @param value - the number we want to represent as a double.
   */
  constructor(value: number) {
    if (!(this instanceof Double)) return new Double(value);

    if ((value as unknown) instanceof Number) {
      value = value.valueOf();
    }

    this.value = +value;
  }

  /**
   * Access the number value.
   *
   * @returns returns the wrapped double number.
   */
  valueOf(): number {
    return this.value;
  }

  toJSON(): number {
    return this.value;
  }

  toString(radix?: number): string {
    return this.value.toString(radix);
  }

  /** @internal */
  toExtendedJSON(options?: EJSONOptions): number | DoubleExtended {
    if (options && (options.legacy || (options.relaxed && isFinite(this.value)))) {
      return this.value;
    }

    if (Object.is(Math.sign(this.value), -0)) {
      // NOTE: JavaScript has +0 and -0, apparently to model limit calculations. If a user
      // explicitly provided `-0` then we need to ensure the sign makes it into the output
      return { $numberDouble: `-${this.value.toFixed(1)}` };
    }

    return {
      $numberDouble: Number.isInteger(this.value) ? this.value.toFixed(1) : this.value.toString()
    };
  }

  /** @internal */
  static fromExtendedJSON(doc: DoubleExtended, options?: EJSONOptions): number | Double {
    const doubleValue = parseFloat(doc.$numberDouble);
    return options && options.relaxed ? doubleValue : new Double(doubleValue);
  }

  /** @internal */
  [Symbol.for('nodejs.util.inspect.custom')](): string {
    return this.inspect();
  }

  inspect(): string {
    const eJSON = this.toExtendedJSON() as DoubleExtended;
    return `new Double(${eJSON.$numberDouble})`;
  }
}

Object.defineProperty(Double.prototype, '_bsontype', { value: 'Double' });
