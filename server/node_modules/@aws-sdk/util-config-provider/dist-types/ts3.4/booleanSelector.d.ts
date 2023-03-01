export declare enum SelectorType {
  ENV = "env",
  CONFIG = "shared config entry",
}
export declare const booleanSelector: (
  obj: Record<string, string | undefined>,
  key: string,
  type: SelectorType
) => boolean | undefined;
