import { SSOToken } from "@aws-sdk/shared-ini-file-loader";
export declare const writeSSOTokenToFile: (
  id: string,
  ssoToken: SSOToken
) => Promise<void>;
