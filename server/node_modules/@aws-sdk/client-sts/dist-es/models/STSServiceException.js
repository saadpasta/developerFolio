import { ServiceException as __ServiceException, } from "@aws-sdk/smithy-client";
export class STSServiceException extends __ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, STSServiceException.prototype);
    }
}
