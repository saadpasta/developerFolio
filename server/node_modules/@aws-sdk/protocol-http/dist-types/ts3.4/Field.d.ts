import { FieldPosition } from "./FieldPosition";
export declare type FieldOptions = {
  name: string;
  kind?: FieldPosition;
  values?: string[];
};
export declare class Field {
  readonly name: string;
  readonly kind: FieldPosition;
  values: string[];
  constructor({ name, kind, values }: FieldOptions);
  add(value: string): void;
  set(values: string[]): void;
  remove(value: string): void;
  toString(): string;
  get(): string[];
}
