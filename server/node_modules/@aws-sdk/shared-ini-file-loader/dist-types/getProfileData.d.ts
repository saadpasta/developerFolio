import { ParsedIniData } from "@aws-sdk/types";
/**
 * Returns the profile data from parsed ini data.
 * * Returns data for `default`
 * * Reads profileName after profile prefix including/excluding quotes
 */
export declare const getProfileData: (data: ParsedIniData) => ParsedIniData;
