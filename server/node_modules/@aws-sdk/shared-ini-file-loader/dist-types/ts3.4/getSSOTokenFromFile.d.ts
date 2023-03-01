export interface SSOToken {
  accessToken: string;
  expiresAt: string;
  refreshToken?: string;
  clientId?: string;
  clientSecret?: string;
  registrationExpiresAt?: string;
  region?: string;
  startUrl?: string;
}
export declare const getSSOTokenFromFile: (id: string) => Promise<SSOToken>;
