"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSOOIDCServiceException = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
class SSOOIDCServiceException extends smithy_client_1.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, SSOOIDCServiceException.prototype);
    }
}
exports.SSOOIDCServiceException = SSOOIDCServiceException;
