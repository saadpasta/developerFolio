"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSessionTokenResponseFilterSensitiveLog = exports.GetSessionTokenRequestFilterSensitiveLog = exports.GetFederationTokenResponseFilterSensitiveLog = exports.FederatedUserFilterSensitiveLog = exports.GetFederationTokenRequestFilterSensitiveLog = exports.GetCallerIdentityResponseFilterSensitiveLog = exports.GetCallerIdentityRequestFilterSensitiveLog = exports.GetAccessKeyInfoResponseFilterSensitiveLog = exports.GetAccessKeyInfoRequestFilterSensitiveLog = exports.DecodeAuthorizationMessageResponseFilterSensitiveLog = exports.DecodeAuthorizationMessageRequestFilterSensitiveLog = exports.AssumeRoleWithWebIdentityResponseFilterSensitiveLog = exports.AssumeRoleWithWebIdentityRequestFilterSensitiveLog = exports.AssumeRoleWithSAMLResponseFilterSensitiveLog = exports.AssumeRoleWithSAMLRequestFilterSensitiveLog = exports.AssumeRoleResponseFilterSensitiveLog = exports.CredentialsFilterSensitiveLog = exports.AssumeRoleRequestFilterSensitiveLog = exports.TagFilterSensitiveLog = exports.PolicyDescriptorTypeFilterSensitiveLog = exports.AssumedRoleUserFilterSensitiveLog = exports.InvalidAuthorizationMessageException = exports.IDPCommunicationErrorException = exports.InvalidIdentityTokenException = exports.IDPRejectedClaimException = exports.RegionDisabledException = exports.PackedPolicyTooLargeException = exports.MalformedPolicyDocumentException = exports.ExpiredTokenException = void 0;
const STSServiceException_1 = require("./STSServiceException");
class ExpiredTokenException extends STSServiceException_1.STSServiceException {
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
exports.ExpiredTokenException = ExpiredTokenException;
class MalformedPolicyDocumentException extends STSServiceException_1.STSServiceException {
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
exports.MalformedPolicyDocumentException = MalformedPolicyDocumentException;
class PackedPolicyTooLargeException extends STSServiceException_1.STSServiceException {
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
exports.PackedPolicyTooLargeException = PackedPolicyTooLargeException;
class RegionDisabledException extends STSServiceException_1.STSServiceException {
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
exports.RegionDisabledException = RegionDisabledException;
class IDPRejectedClaimException extends STSServiceException_1.STSServiceException {
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
exports.IDPRejectedClaimException = IDPRejectedClaimException;
class InvalidIdentityTokenException extends STSServiceException_1.STSServiceException {
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
exports.InvalidIdentityTokenException = InvalidIdentityTokenException;
class IDPCommunicationErrorException extends STSServiceException_1.STSServiceException {
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
exports.IDPCommunicationErrorException = IDPCommunicationErrorException;
class InvalidAuthorizationMessageException extends STSServiceException_1.STSServiceException {
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
exports.InvalidAuthorizationMessageException = InvalidAuthorizationMessageException;
const AssumedRoleUserFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AssumedRoleUserFilterSensitiveLog = AssumedRoleUserFilterSensitiveLog;
const PolicyDescriptorTypeFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PolicyDescriptorTypeFilterSensitiveLog = PolicyDescriptorTypeFilterSensitiveLog;
const TagFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.TagFilterSensitiveLog = TagFilterSensitiveLog;
const AssumeRoleRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AssumeRoleRequestFilterSensitiveLog = AssumeRoleRequestFilterSensitiveLog;
const CredentialsFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CredentialsFilterSensitiveLog = CredentialsFilterSensitiveLog;
const AssumeRoleResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AssumeRoleResponseFilterSensitiveLog = AssumeRoleResponseFilterSensitiveLog;
const AssumeRoleWithSAMLRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AssumeRoleWithSAMLRequestFilterSensitiveLog = AssumeRoleWithSAMLRequestFilterSensitiveLog;
const AssumeRoleWithSAMLResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AssumeRoleWithSAMLResponseFilterSensitiveLog = AssumeRoleWithSAMLResponseFilterSensitiveLog;
const AssumeRoleWithWebIdentityRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AssumeRoleWithWebIdentityRequestFilterSensitiveLog = AssumeRoleWithWebIdentityRequestFilterSensitiveLog;
const AssumeRoleWithWebIdentityResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AssumeRoleWithWebIdentityResponseFilterSensitiveLog = AssumeRoleWithWebIdentityResponseFilterSensitiveLog;
const DecodeAuthorizationMessageRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DecodeAuthorizationMessageRequestFilterSensitiveLog = DecodeAuthorizationMessageRequestFilterSensitiveLog;
const DecodeAuthorizationMessageResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DecodeAuthorizationMessageResponseFilterSensitiveLog = DecodeAuthorizationMessageResponseFilterSensitiveLog;
const GetAccessKeyInfoRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetAccessKeyInfoRequestFilterSensitiveLog = GetAccessKeyInfoRequestFilterSensitiveLog;
const GetAccessKeyInfoResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetAccessKeyInfoResponseFilterSensitiveLog = GetAccessKeyInfoResponseFilterSensitiveLog;
const GetCallerIdentityRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetCallerIdentityRequestFilterSensitiveLog = GetCallerIdentityRequestFilterSensitiveLog;
const GetCallerIdentityResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetCallerIdentityResponseFilterSensitiveLog = GetCallerIdentityResponseFilterSensitiveLog;
const GetFederationTokenRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetFederationTokenRequestFilterSensitiveLog = GetFederationTokenRequestFilterSensitiveLog;
const FederatedUserFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.FederatedUserFilterSensitiveLog = FederatedUserFilterSensitiveLog;
const GetFederationTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetFederationTokenResponseFilterSensitiveLog = GetFederationTokenResponseFilterSensitiveLog;
const GetSessionTokenRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetSessionTokenRequestFilterSensitiveLog = GetSessionTokenRequestFilterSensitiveLog;
const GetSessionTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetSessionTokenResponseFilterSensitiveLog = GetSessionTokenResponseFilterSensitiveLog;
