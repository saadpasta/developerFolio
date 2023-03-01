export declare type GetAttrValue =
  | string
  | boolean
  | {
      [key: string]: GetAttrValue;
    }
  | Array<GetAttrValue>;
export declare const getAttr: (
  value: GetAttrValue,
  path: string
) => GetAttrValue;
