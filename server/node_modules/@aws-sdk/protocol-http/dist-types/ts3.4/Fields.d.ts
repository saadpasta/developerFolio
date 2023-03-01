import { Field } from "./Field";
import { FieldPosition } from "./FieldPosition";
export declare type FieldsOptions = {
  fields?: Field[];
  encoding?: string;
};
export declare class Fields {
  private readonly entries;
  private readonly encoding;
  constructor({ fields, encoding }: FieldsOptions);
  setField(field: Field): void;
  getField(name: string): Field | undefined;
  removeField(name: string): void;
  getByType(kind: FieldPosition): Field[];
}
