export declare type IniSection = Record<string, string | undefined>;
export interface Profile extends IniSection {}
export declare type ParsedIniData = Record<string, IniSection>;
export interface SharedConfigFiles {
  credentialsFile: ParsedIniData;
  configFile: ParsedIniData;
}
