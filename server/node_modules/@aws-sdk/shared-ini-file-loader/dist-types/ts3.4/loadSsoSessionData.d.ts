import { ParsedIniData } from "@aws-sdk/types";
export interface SsoSessionInit {
  configFilepath?: string;
}
export declare const loadSsoSessionData: (
  init?: SsoSessionInit
) => Promise<ParsedIniData>;
