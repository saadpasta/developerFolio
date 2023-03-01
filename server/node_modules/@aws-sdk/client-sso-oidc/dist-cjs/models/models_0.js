"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartDeviceAuthorizationResponseFilterSensitiveLog = exports.StartDeviceAuthorizationRequestFilterSensitiveLog = exports.RegisterClientResponseFilterSensitiveLog = exports.RegisterClientRequestFilterSensitiveLog = exports.CreateTokenResponseFilterSensitiveLog = exports.CreateTokenRequestFilterSensitiveLog = exports.InvalidClientMetadataException = exports.UnsupportedGrantTypeException = exports.UnauthorizedClientException = exports.SlowDownException = exports.InvalidScopeException = exports.InvalidRequestException = exports.InvalidGrantException = exports.InvalidClientException = exports.InternalServerException = exports.ExpiredTokenException = exports.AuthorizationPendingException = exports.AccessDeniedException = void 0;
const SSOOIDCServiceException_1 = require("./SSOOIDCServiceException");
class AccessDeniedException extends SSOOIDCServiceException_1.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...opts,
        });
        this.name = "AccessDeniedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, AccessDeniedException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
exports.AccessDeniedException = AccessDeniedException;
class AuthorizationPendingException extends SSOOIDCServiceException_1.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "AuthorizationPendingException",
            $fault: "client",
            ...opts,
        });
        this.name = "AuthorizationPendingException";
        this.$fault = "client";
        Object.setPrototypeOf(this, AuthorizationPendingException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
exports.AuthorizationPendingException = AuthorizationPendingException;
class ExpiredTokenException extends SSOOIDCServiceException_1.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "ExpiredTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExpiredTokenException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
exports.ExpiredTokenException = ExpiredTokenException;
class InternalServerException extends SSOOIDCServiceException_1.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InternalServerException",
            $fault: "server",
            ...opts,
        });
        this.name = "InternalServerException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InternalServerException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
exports.InternalServerException = InternalServerException;
class InvalidClientException extends SSOOIDCServiceException_1.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidClientException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
exports.InvalidClientException = InvalidClientException;
class InvalidGrantException extends SSOOIDCServiceException_1.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidGrantException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidGrantException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidGrantException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
exports.InvalidGrantException = InvalidGrantException;
class InvalidRequestException extends SSOOIDCServiceException_1.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidRequestException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRequestException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
exports.InvalidRequestException = InvalidRequestException;
class InvalidScopeException extends SSOOIDCServiceException_1.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidScopeException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidScopeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidScopeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
exports.InvalidScopeException = InvalidScopeException;
class SlowDownException extends SSOOIDCServiceException_1.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "SlowDownException",
            $fault: "client",
            ...opts,
        });
        this.name = "SlowDownException";
        this.$fault = "client";
        Object.setPrototypeOf(this, SlowDownException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
exports.SlowDownException = SlowDownException;
class UnauthorizedClientException extends SSOOIDCServiceException_1.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "UnauthorizedClientException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnauthorizedClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnauthorizedClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
exports.UnauthorizedClientException = UnauthorizedClientException;
class UnsupportedGrantTypeException extends SSOOIDCServiceException_1.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "UnsupportedGrantTypeException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnsupportedGrantTypeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnsupportedGrantTypeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
exports.UnsupportedGrantTypeException = UnsupportedGrantTypeException;
class InvalidClientMetadataException extends SSOOIDCServiceException_1.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidClientMetadataException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidClientMetadataException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidClientMetadataException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
exports.InvalidClientMetadataException = InvalidClientMetadataException;
const CreateTokenRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CreateTokenRequestFilterSensitiveLog = CreateTokenRequestFilterSensitiveLog;
const CreateTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CreateTokenResponseFilterSensitiveLog = CreateTokenResponseFilterSensitiveLog;
const RegisterClientRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.RegisterClientRequestFilterSensitiveLog = RegisterClientRequestFilterSensitiveLog;
const RegisterClientResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.RegisterClientResponseFilterSensitiveLog = RegisterClientResponseFilterSensitiveLog;
const StartDeviceAuthorizationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.StartDeviceAuthorizationRequestFilterSensitiveLog = StartDeviceAuthorizationRequestFilterSensitiveLog;
const StartDeviceAuthorizationResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.StartDeviceAuthorizationResponseFilterSensitiveLog = StartDeviceAuthorizationResponseFilterSensitiveLog;
