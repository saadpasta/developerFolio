import { CreateTokenCommand } from "@aws-sdk/client-sso-oidc";
import { getSsoOidcClient } from "./getSsoOidcClient";
export const getNewSsoOidcToken = (ssoToken, ssoRegion) => {
    const ssoOidcClient = getSsoOidcClient(ssoRegion);
    return ssoOidcClient.send(new CreateTokenCommand({
        clientId: ssoToken.clientId,
        clientSecret: ssoToken.clientSecret,
        refreshToken: ssoToken.refreshToken,
        grantType: "refresh_token",
    }));
};
