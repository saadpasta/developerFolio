import { isClockSkewError, isRetryableByTrait, isThrottlingError, isTransientError, } from "@aws-sdk/service-error-classification";
export const defaultRetryDecider = (error) => {
    if (!error) {
        return false;
    }
    return isRetryableByTrait(error) || isClockSkewError(error) || isThrottlingError(error) || isTransientError(error);
};
