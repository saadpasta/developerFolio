"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutRequestFilterSensitiveLog = exports.ListAccountsResponseFilterSensitiveLog = exports.ListAccountsRequestFilterSensitiveLog = exports.ListAccountRolesResponseFilterSensitiveLog = exports.RoleInfoFilterSensitiveLog = exports.ListAccountRolesRequestFilterSensitiveLog = exports.GetRoleCredentialsResponseFilterSensitiveLog = exports.RoleCredentialsFilterSensitiveLog = exports.GetRoleCredentialsRequestFilterSensitiveLog = exports.AccountInfoFilterSensitiveLog = exports.UnauthorizedException = exports.TooManyRequestsException = exports.ResourceNotFoundException = exports.InvalidRequestException = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
const SSOServiceException_1 = require("./SSOServiceException");
class InvalidRequestException extends SSOServiceException_1.SSOServiceException {
    constructor(opts) {
        super({
            name: "InvalidRequestException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRequestException.prototype);
    }
}
exports.InvalidRequestException = InvalidRequestException;
class ResourceNotFoundException extends SSOServiceException_1.SSOServiceException {
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
class TooManyRequestsException extends SSOServiceException_1.SSOServiceException {
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
class UnauthorizedException extends SSOServiceException_1.SSOServiceException {
    constructor(opts) {
        super({
            name: "UnauthorizedException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnauthorizedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnauthorizedException.prototype);
    }
}
exports.UnauthorizedException = UnauthorizedException;
const AccountInfoFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AccountInfoFilterSensitiveLog = AccountInfoFilterSensitiveLog;
const GetRoleCredentialsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }),
});
exports.GetRoleCredentialsRequestFilterSensitiveLog = GetRoleCredentialsRequestFilterSensitiveLog;
const RoleCredentialsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.secretAccessKey && { secretAccessKey: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.sessionToken && { sessionToken: smithy_client_1.SENSITIVE_STRING }),
});
exports.RoleCredentialsFilterSensitiveLog = RoleCredentialsFilterSensitiveLog;
const GetRoleCredentialsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.roleCredentials && { roleCredentials: (0, exports.RoleCredentialsFilterSensitiveLog)(obj.roleCredentials) }),
});
exports.GetRoleCredentialsResponseFilterSensitiveLog = GetRoleCredentialsResponseFilterSensitiveLog;
const ListAccountRolesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }),
});
exports.ListAccountRolesRequestFilterSensitiveLog = ListAccountRolesRequestFilterSensitiveLog;
const RoleInfoFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.RoleInfoFilterSensitiveLog = RoleInfoFilterSensitiveLog;
const ListAccountRolesResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListAccountRolesResponseFilterSensitiveLog = ListAccountRolesResponseFilterSensitiveLog;
const ListAccountsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }),
});
exports.ListAccountsRequestFilterSensitiveLog = ListAccountsRequestFilterSensitiveLog;
const ListAccountsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListAccountsResponseFilterSensitiveLog = ListAccountsResponseFilterSensitiveLog;
const LogoutRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }),
});
exports.LogoutRequestFilterSensitiveLog = LogoutRequestFilterSensitiveLog;
