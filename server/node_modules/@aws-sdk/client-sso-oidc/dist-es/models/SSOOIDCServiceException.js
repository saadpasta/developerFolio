import { ServiceException as __ServiceException, } from "@aws-sdk/smithy-client";
export class SSOOIDCServiceException extends __ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, SSOOIDCServiceException.prototype);
    }
}
