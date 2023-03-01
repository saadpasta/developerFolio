export interface AuthScheme {
  name: "sigv4" | "sigv4a" | string;
  signingName: string;
  signingRegion: string;
  signingRegionSet?: string[];
  signingScope?: never;
  properties: Record<string, unknown>;
}
export interface HttpAuthDefinition {
  in: HttpAuthLocation;
  name: string;
  scheme?: string;
}
export declare enum HttpAuthLocation {
  HEADER = "header",
  QUERY = "query",
}
