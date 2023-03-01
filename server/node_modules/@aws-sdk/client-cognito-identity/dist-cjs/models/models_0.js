"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LookupDeveloperIdentityResponseFilterSensitiveLog = exports.LookupDeveloperIdentityInputFilterSensitiveLog = exports.ListTagsForResourceResponseFilterSensitiveLog = exports.ListTagsForResourceInputFilterSensitiveLog = exports.ListIdentityPoolsResponseFilterSensitiveLog = exports.IdentityPoolShortDescriptionFilterSensitiveLog = exports.ListIdentityPoolsInputFilterSensitiveLog = exports.ListIdentitiesResponseFilterSensitiveLog = exports.ListIdentitiesInputFilterSensitiveLog = exports.GetPrincipalTagAttributeMapResponseFilterSensitiveLog = exports.GetPrincipalTagAttributeMapInputFilterSensitiveLog = exports.GetOpenIdTokenForDeveloperIdentityResponseFilterSensitiveLog = exports.GetOpenIdTokenForDeveloperIdentityInputFilterSensitiveLog = exports.GetOpenIdTokenResponseFilterSensitiveLog = exports.GetOpenIdTokenInputFilterSensitiveLog = exports.GetIdentityPoolRolesResponseFilterSensitiveLog = exports.RoleMappingFilterSensitiveLog = exports.RulesConfigurationTypeFilterSensitiveLog = exports.MappingRuleFilterSensitiveLog = exports.GetIdentityPoolRolesInputFilterSensitiveLog = exports.GetIdResponseFilterSensitiveLog = exports.GetIdInputFilterSensitiveLog = exports.GetCredentialsForIdentityResponseFilterSensitiveLog = exports.CredentialsFilterSensitiveLog = exports.GetCredentialsForIdentityInputFilterSensitiveLog = exports.DescribeIdentityPoolInputFilterSensitiveLog = exports.IdentityDescriptionFilterSensitiveLog = exports.DescribeIdentityInputFilterSensitiveLog = exports.DeleteIdentityPoolInputFilterSensitiveLog = exports.DeleteIdentitiesResponseFilterSensitiveLog = exports.UnprocessedIdentityIdFilterSensitiveLog = exports.DeleteIdentitiesInputFilterSensitiveLog = exports.IdentityPoolFilterSensitiveLog = exports.CreateIdentityPoolInputFilterSensitiveLog = exports.CognitoIdentityProviderFilterSensitiveLog = exports.ConcurrentModificationException = exports.DeveloperUserAlreadyRegisteredException = exports.RoleMappingType = exports.MappingRuleMatchType = exports.InvalidIdentityPoolConfigurationException = exports.ExternalServiceException = exports.ResourceNotFoundException = exports.ErrorCode = exports.TooManyRequestsException = exports.ResourceConflictException = exports.NotAuthorizedException = exports.LimitExceededException = exports.InvalidParameterException = exports.InternalErrorException = exports.AmbiguousRoleResolutionType = void 0;
exports.UntagResourceResponseFilterSensitiveLog = exports.UntagResourceInputFilterSensitiveLog = exports.UnlinkIdentityInputFilterSensitiveLog = exports.UnlinkDeveloperIdentityInputFilterSensitiveLog = exports.TagResourceResponseFilterSensitiveLog = exports.TagResourceInputFilterSensitiveLog = exports.SetPrincipalTagAttributeMapResponseFilterSensitiveLog = exports.SetPrincipalTagAttributeMapInputFilterSensitiveLog = exports.SetIdentityPoolRolesInputFilterSensitiveLog = exports.MergeDeveloperIdentitiesResponseFilterSensitiveLog = exports.MergeDeveloperIdentitiesInputFilterSensitiveLog = void 0;
const CognitoIdentityServiceException_1 = require("./CognitoIdentityServiceException");
var AmbiguousRoleResolutionType;
(function (AmbiguousRoleResolutionType) {
    AmbiguousRoleResolutionType["AUTHENTICATED_ROLE"] = "AuthenticatedRole";
    AmbiguousRoleResolutionType["DENY"] = "Deny";
})(AmbiguousRoleResolutionType = exports.AmbiguousRoleResolutionType || (exports.AmbiguousRoleResolutionType = {}));
class InternalErrorException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "InternalErrorException",
            $fault: "server",
            ...opts,
        });
        this.name = "InternalErrorException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InternalErrorException.prototype);
    }
}
exports.InternalErrorException = InternalErrorException;
class InvalidParameterException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "InvalidParameterException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidParameterException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidParameterException.prototype);
    }
}
exports.InvalidParameterException = InvalidParameterException;
class LimitExceededException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "LimitExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, LimitExceededException.prototype);
    }
}
exports.LimitExceededException = LimitExceededException;
class NotAuthorizedException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "NotAuthorizedException",
            $fault: "client",
            ...opts,
        });
        this.name = "NotAuthorizedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, NotAuthorizedException.prototype);
    }
}
exports.NotAuthorizedException = NotAuthorizedException;
class ResourceConflictException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "ResourceConflictException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceConflictException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceConflictException.prototype);
    }
}
exports.ResourceConflictException = ResourceConflictException;
class TooManyRequestsException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "TooManyRequestsException",
            $fault: "client",
            ...opts,
        });
        this.name = "TooManyRequestsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    }
}
exports.TooManyRequestsException = TooManyRequestsException;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["ACCESS_DENIED"] = "AccessDenied";
    ErrorCode["INTERNAL_SERVER_ERROR"] = "InternalServerError";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
class ResourceNotFoundException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
exports.ResourceNotFoundException = ResourceNotFoundException;
class ExternalServiceException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "ExternalServiceException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExternalServiceException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExternalServiceException.prototype);
    }
}
exports.ExternalServiceException = ExternalServiceException;
class InvalidIdentityPoolConfigurationException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "InvalidIdentityPoolConfigurationException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidIdentityPoolConfigurationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidIdentityPoolConfigurationException.prototype);
    }
}
exports.InvalidIdentityPoolConfigurationException = InvalidIdentityPoolConfigurationException;
var MappingRuleMatchType;
(function (MappingRuleMatchType) {
    MappingRuleMatchType["CONTAINS"] = "Contains";
    MappingRuleMatchType["EQUALS"] = "Equals";
    MappingRuleMatchType["NOT_EQUAL"] = "NotEqual";
    MappingRuleMatchType["STARTS_WITH"] = "StartsWith";
})(MappingRuleMatchType = exports.MappingRuleMatchType || (exports.MappingRuleMatchType = {}));
var RoleMappingType;
(function (RoleMappingType) {
    RoleMappingType["RULES"] = "Rules";
    RoleMappingType["TOKEN"] = "Token";
})(RoleMappingType = exports.RoleMappingType || (exports.RoleMappingType = {}));
class DeveloperUserAlreadyRegisteredException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "DeveloperUserAlreadyRegisteredException",
            $fault: "client",
            ...opts,
        });
        this.name = "DeveloperUserAlreadyRegisteredException";
        this.$fault = "client";
        Object.setPrototypeOf(this, DeveloperUserAlreadyRegisteredException.prototype);
    }
}
exports.DeveloperUserAlreadyRegisteredException = DeveloperUserAlreadyRegisteredException;
class ConcurrentModificationException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "ConcurrentModificationException",
            $fault: "client",
            ...opts,
        });
        this.name = "ConcurrentModificationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    }
}
exports.ConcurrentModificationException = ConcurrentModificationException;
const CognitoIdentityProviderFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CognitoIdentityProviderFilterSensitiveLog = CognitoIdentityProviderFilterSensitiveLog;
const CreateIdentityPoolInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CreateIdentityPoolInputFilterSensitiveLog = CreateIdentityPoolInputFilterSensitiveLog;
const IdentityPoolFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.IdentityPoolFilterSensitiveLog = IdentityPoolFilterSensitiveLog;
const DeleteIdentitiesInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteIdentitiesInputFilterSensitiveLog = DeleteIdentitiesInputFilterSensitiveLog;
const UnprocessedIdentityIdFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.UnprocessedIdentityIdFilterSensitiveLog = UnprocessedIdentityIdFilterSensitiveLog;
const DeleteIdentitiesResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteIdentitiesResponseFilterSensitiveLog = DeleteIdentitiesResponseFilterSensitiveLog;
const DeleteIdentityPoolInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteIdentityPoolInputFilterSensitiveLog = DeleteIdentityPoolInputFilterSensitiveLog;
const DescribeIdentityInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DescribeIdentityInputFilterSensitiveLog = DescribeIdentityInputFilterSensitiveLog;
const IdentityDescriptionFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.IdentityDescriptionFilterSensitiveLog = IdentityDescriptionFilterSensitiveLog;
const DescribeIdentityPoolInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DescribeIdentityPoolInputFilterSensitiveLog = DescribeIdentityPoolInputFilterSensitiveLog;
const GetCredentialsForIdentityInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetCredentialsForIdentityInputFilterSensitiveLog = GetCredentialsForIdentityInputFilterSensitiveLog;
const CredentialsFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CredentialsFilterSensitiveLog = CredentialsFilterSensitiveLog;
const GetCredentialsForIdentityResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetCredentialsForIdentityResponseFilterSensitiveLog = GetCredentialsForIdentityResponseFilterSensitiveLog;
const GetIdInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetIdInputFilterSensitiveLog = GetIdInputFilterSensitiveLog;
const GetIdResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetIdResponseFilterSensitiveLog = GetIdResponseFilterSensitiveLog;
const GetIdentityPoolRolesInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetIdentityPoolRolesInputFilterSensitiveLog = GetIdentityPoolRolesInputFilterSensitiveLog;
const MappingRuleFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.MappingRuleFilterSensitiveLog = MappingRuleFilterSensitiveLog;
const RulesConfigurationTypeFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.RulesConfigurationTypeFilterSensitiveLog = RulesConfigurationTypeFilterSensitiveLog;
const RoleMappingFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.RoleMappingFilterSensitiveLog = RoleMappingFilterSensitiveLog;
const GetIdentityPoolRolesResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetIdentityPoolRolesResponseFilterSensitiveLog = GetIdentityPoolRolesResponseFilterSensitiveLog;
const GetOpenIdTokenInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetOpenIdTokenInputFilterSensitiveLog = GetOpenIdTokenInputFilterSensitiveLog;
const GetOpenIdTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetOpenIdTokenResponseFilterSensitiveLog = GetOpenIdTokenResponseFilterSensitiveLog;
const GetOpenIdTokenForDeveloperIdentityInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetOpenIdTokenForDeveloperIdentityInputFilterSensitiveLog = GetOpenIdTokenForDeveloperIdentityInputFilterSensitiveLog;
const GetOpenIdTokenForDeveloperIdentityResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetOpenIdTokenForDeveloperIdentityResponseFilterSensitiveLog = GetOpenIdTokenForDeveloperIdentityResponseFilterSensitiveLog;
const GetPrincipalTagAttributeMapInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetPrincipalTagAttributeMapInputFilterSensitiveLog = GetPrincipalTagAttributeMapInputFilterSensitiveLog;
const GetPrincipalTagAttributeMapResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetPrincipalTagAttributeMapResponseFilterSensitiveLog = GetPrincipalTagAttributeMapResponseFilterSensitiveLog;
const ListIdentitiesInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListIdentitiesInputFilterSensitiveLog = ListIdentitiesInputFilterSensitiveLog;
const ListIdentitiesResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListIdentitiesResponseFilterSensitiveLog = ListIdentitiesResponseFilterSensitiveLog;
const ListIdentityPoolsInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListIdentityPoolsInputFilterSensitiveLog = ListIdentityPoolsInputFilterSensitiveLog;
const IdentityPoolShortDescriptionFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.IdentityPoolShortDescriptionFilterSensitiveLog = IdentityPoolShortDescriptionFilterSensitiveLog;
const ListIdentityPoolsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListIdentityPoolsResponseFilterSensitiveLog = ListIdentityPoolsResponseFilterSensitiveLog;
const ListTagsForResourceInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListTagsForResourceInputFilterSensitiveLog = ListTagsForResourceInputFilterSensitiveLog;
const ListTagsForResourceResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListTagsForResourceResponseFilterSensitiveLog = ListTagsForResourceResponseFilterSensitiveLog;
const LookupDeveloperIdentityInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.LookupDeveloperIdentityInputFilterSensitiveLog = LookupDeveloperIdentityInputFilterSensitiveLog;
const LookupDeveloperIdentityResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.LookupDeveloperIdentityResponseFilterSensitiveLog = LookupDeveloperIdentityResponseFilterSensitiveLog;
const MergeDeveloperIdentitiesInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.MergeDeveloperIdentitiesInputFilterSensitiveLog = MergeDeveloperIdentitiesInputFilterSensitiveLog;
const MergeDeveloperIdentitiesResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.MergeDeveloperIdentitiesResponseFilterSensitiveLog = MergeDeveloperIdentitiesResponseFilterSensitiveLog;
const SetIdentityPoolRolesInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.SetIdentityPoolRolesInputFilterSensitiveLog = SetIdentityPoolRolesInputFilterSensitiveLog;
const SetPrincipalTagAttributeMapInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.SetPrincipalTagAttributeMapInputFilterSensitiveLog = SetPrincipalTagAttributeMapInputFilterSensitiveLog;
const SetPrincipalTagAttributeMapResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.SetPrincipalTagAttributeMapResponseFilterSensitiveLog = SetPrincipalTagAttributeMapResponseFilterSensitiveLog;
const TagResourceInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.TagResourceInputFilterSensitiveLog = TagResourceInputFilterSensitiveLog;
const TagResourceResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.TagResourceResponseFilterSensitiveLog = TagResourceResponseFilterSensitiveLog;
const UnlinkDeveloperIdentityInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.UnlinkDeveloperIdentityInputFilterSensitiveLog = UnlinkDeveloperIdentityInputFilterSensitiveLog;
const UnlinkIdentityInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.UnlinkIdentityInputFilterSensitiveLog = UnlinkIdentityInputFilterSensitiveLog;
const UntagResourceInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.UntagResourceInputFilterSensitiveLog = UntagResourceInputFilterSensitiveLog;
const UntagResourceResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.UntagResourceResponseFilterSensitiveLog = UntagResourceResponseFilterSensitiveLog;
