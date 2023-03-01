export declare const createConfigValueProvider: <
  Config extends Record<string, unknown>
>(
  configKey: string,
  canonicalEndpointParamKey: string,
  config: Config
) => () => Promise<any>;
