import { AwsCredentialIdentity } from "@aws-sdk/types";
import { FromSSOInit, SsoCredentialsParameters } from "./fromSSO";
/**
 * @private
 */
export declare const resolveSSOCredentials: ({ ssoStartUrl, ssoSession, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, profile, }: FromSSOInit & SsoCredentialsParameters) => Promise<AwsCredentialIdentity>;
