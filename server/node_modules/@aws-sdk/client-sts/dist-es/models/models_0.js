import { STSServiceException as __BaseException } from "./STSServiceException";
export class ExpiredTokenException extends __BaseException {
    constructor(opts) {
        super({
            name: "ExpiredTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExpiredTokenException.prototype);
    }
}
export class MalformedPolicyDocumentException extends __BaseException {
    constructor(opts) {
        super({
            name: "MalformedPolicyDocumentException",
            $fault: "client",
            ...opts,
        });
        this.name = "MalformedPolicyDocumentException";
        this.$fault = "client";
        Object.setPrototypeOf(this, MalformedPolicyDocumentException.prototype);
    }
}
export class PackedPolicyTooLargeException extends __BaseException {
    constructor(opts) {
        super({
            name: "PackedPolicyTooLargeException",
            $fault: "client",
            ...opts,
        });
        this.name = "PackedPolicyTooLargeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, PackedPolicyTooLargeException.prototype);
    }
}
export class RegionDisabledException extends __BaseException {
    constructor(opts) {
        super({
            name: "RegionDisabledException",
            $fault: "client",
            ...opts,
        });
        this.name = "RegionDisabledException";
        this.$fault = "client";
        Object.setPrototypeOf(this, RegionDisabledException.prototype);
    }
}
export class IDPRejectedClaimException extends __BaseException {
    constructor(opts) {
        super({
            name: "IDPRejectedClaimException",
            $fault: "client",
            ...opts,
        });
        this.name = "IDPRejectedClaimException";
        this.$fault = "client";
        Object.setPrototypeOf(this, IDPRejectedClaimException.prototype);
    }
}
export class InvalidIdentityTokenException extends __BaseException {
    constructor(opts) {
        super({
            name: "InvalidIdentityTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidIdentityTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidIdentityTokenException.prototype);
    }
}
export class IDPCommunicationErrorException extends __BaseException {
    constructor(opts) {
        super({
            name: "IDPCommunicationErrorException",
            $fault: "client",
            ...opts,
        });
        this.name = "IDPCommunicationErrorException";
        this.$fault = "client";
        Object.setPrototypeOf(this, IDPCommunicationErrorException.prototype);
    }
}
export class InvalidAuthorizationMessageException extends __BaseException {
    constructor(opts) {
        super({
            name: "InvalidAuthorizationMessageException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidAuthorizationMessageException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidAuthorizationMessageException.prototype);
    }
}
export const AssumedRoleUserFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PolicyDescriptorTypeFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const TagFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const AssumeRoleRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const CredentialsFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const AssumeRoleResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const AssumeRoleWithSAMLRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const AssumeRoleWithSAMLResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const AssumeRoleWithWebIdentityRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const AssumeRoleWithWebIdentityResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DecodeAuthorizationMessageRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DecodeAuthorizationMessageResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetAccessKeyInfoRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetAccessKeyInfoResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetCallerIdentityRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetCallerIdentityResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetFederationTokenRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const FederatedUserFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetFederationTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetSessionTokenRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetSessionTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
