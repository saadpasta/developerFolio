import { ParsedIniData } from "@aws-sdk/types";
/**
 * Returns the sso-session data from parsed ini data by reading
 * ssoSessionName after sso-session prefix including/excluding quotes
 */
export declare const getSsoSessionData: (data: ParsedIniData) => ParsedIniData;
