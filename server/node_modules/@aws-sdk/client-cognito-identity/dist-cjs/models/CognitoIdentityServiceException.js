"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CognitoIdentityServiceException = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
class CognitoIdentityServiceException extends smithy_client_1.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, CognitoIdentityServiceException.prototype);
    }
}
exports.CognitoIdentityServiceException = CognitoIdentityServiceException;
