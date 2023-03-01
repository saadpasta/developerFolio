import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { decorateServiceException as __decorateServiceException, expectBoolean as __expectBoolean, expectNonNull as __expectNonNull, expectNumber as __expectNumber, expectString as __expectString, parseEpochTimestamp as __parseEpochTimestamp, throwDefaultError, } from "@aws-sdk/smithy-client";
import { CognitoIdentityServiceException as __BaseException } from "../models/CognitoIdentityServiceException";
import { ConcurrentModificationException, DeveloperUserAlreadyRegisteredException, ExternalServiceException, InternalErrorException, InvalidIdentityPoolConfigurationException, InvalidParameterException, LimitExceededException, NotAuthorizedException, ResourceConflictException, ResourceNotFoundException, TooManyRequestsException, } from "../models/models_0";
export const serializeAws_json1_1CreateIdentityPoolCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.CreateIdentityPool",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateIdentityPoolInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const serializeAws_json1_1DeleteIdentitiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.DeleteIdentities",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteIdentitiesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const serializeAws_json1_1DeleteIdentityPoolCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.DeleteIdentityPool",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteIdentityPoolInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const serializeAws_json1_1DescribeIdentityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.DescribeIdentity",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeIdentityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const serializeAws_json1_1DescribeIdentityPoolCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.DescribeIdentityPool",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeIdentityPoolInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const serializeAws_json1_1GetCredentialsForIdentityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.GetCredentialsForIdentity",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCredentialsForIdentityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const serializeAws_json1_1GetIdCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.GetId",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetIdInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const serializeAws_json1_1GetIdentityPoolRolesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.GetIdentityPoolRoles",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetIdentityPoolRolesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const serializeAws_json1_1GetOpenIdTokenCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.GetOpenIdToken",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOpenIdTokenInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const serializeAws_json1_1GetPrincipalTagAttributeMapCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.GetPrincipalTagAttributeMap",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPrincipalTagAttributeMapInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const serializeAws_json1_1ListIdentitiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.ListIdentities",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListIdentitiesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const serializeAws_json1_1ListIdentityPoolsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.ListIdentityPools",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListIdentityPoolsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const serializeAws_json1_1LookupDeveloperIdentityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.LookupDeveloperIdentity",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1LookupDeveloperIdentityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const serializeAws_json1_1MergeDeveloperIdentitiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.MergeDeveloperIdentities",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1MergeDeveloperIdentitiesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const serializeAws_json1_1SetIdentityPoolRolesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.SetIdentityPoolRoles",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SetIdentityPoolRolesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const serializeAws_json1_1SetPrincipalTagAttributeMapCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.SetPrincipalTagAttributeMap",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SetPrincipalTagAttributeMapInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const serializeAws_json1_1UnlinkDeveloperIdentityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.UnlinkDeveloperIdentity",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UnlinkDeveloperIdentityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const serializeAws_json1_1UnlinkIdentityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.UnlinkIdentity",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UnlinkIdentityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const serializeAws_json1_1UpdateIdentityPoolCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.UpdateIdentityPool",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1IdentityPool(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const deserializeAws_json1_1CreateIdentityPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateIdentityPoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1IdentityPool(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1CreateIdentityPoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentity#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
export const deserializeAws_json1_1DeleteIdentitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteIdentitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteIdentitiesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1DeleteIdentitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
export const deserializeAws_json1_1DeleteIdentityPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteIdentityPoolCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1DeleteIdentityPoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
export const deserializeAws_json1_1DescribeIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1IdentityDescription(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1DescribeIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
export const deserializeAws_json1_1DescribeIdentityPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeIdentityPoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1IdentityPool(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1DescribeIdentityPoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
export const deserializeAws_json1_1GetCredentialsForIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetCredentialsForIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCredentialsForIdentityResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1GetCredentialsForIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExternalServiceException":
        case "com.amazonaws.cognitoidentity#ExternalServiceException":
            throw await deserializeAws_json1_1ExternalServiceExceptionResponse(parsedOutput, context);
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
        case "InvalidIdentityPoolConfigurationException":
        case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":
            throw await deserializeAws_json1_1InvalidIdentityPoolConfigurationExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
export const deserializeAws_json1_1GetIdCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetIdCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetIdResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1GetIdCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExternalServiceException":
        case "com.amazonaws.cognitoidentity#ExternalServiceException":
            throw await deserializeAws_json1_1ExternalServiceExceptionResponse(parsedOutput, context);
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentity#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
export const deserializeAws_json1_1GetIdentityPoolRolesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetIdentityPoolRolesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetIdentityPoolRolesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1GetIdentityPoolRolesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
export const deserializeAws_json1_1GetOpenIdTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetOpenIdTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOpenIdTokenResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1GetOpenIdTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExternalServiceException":
        case "com.amazonaws.cognitoidentity#ExternalServiceException":
            throw await deserializeAws_json1_1ExternalServiceExceptionResponse(parsedOutput, context);
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
export const deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeveloperUserAlreadyRegisteredException":
        case "com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":
            throw await deserializeAws_json1_1DeveloperUserAlreadyRegisteredExceptionResponse(parsedOutput, context);
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
export const deserializeAws_json1_1GetPrincipalTagAttributeMapCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetPrincipalTagAttributeMapCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPrincipalTagAttributeMapResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1GetPrincipalTagAttributeMapCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
export const deserializeAws_json1_1ListIdentitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListIdentitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListIdentitiesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1ListIdentitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
export const deserializeAws_json1_1ListIdentityPoolsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListIdentityPoolsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListIdentityPoolsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1ListIdentityPoolsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
export const deserializeAws_json1_1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
export const deserializeAws_json1_1LookupDeveloperIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1LookupDeveloperIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1LookupDeveloperIdentityResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1LookupDeveloperIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
export const deserializeAws_json1_1MergeDeveloperIdentitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1MergeDeveloperIdentitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1MergeDeveloperIdentitiesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1MergeDeveloperIdentitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
export const deserializeAws_json1_1SetIdentityPoolRolesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SetIdentityPoolRolesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1SetIdentityPoolRolesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.cognitoidentity#ConcurrentModificationException":
            throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
export const deserializeAws_json1_1SetPrincipalTagAttributeMapCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SetPrincipalTagAttributeMapCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SetPrincipalTagAttributeMapResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1SetPrincipalTagAttributeMapCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
export const deserializeAws_json1_1TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
export const deserializeAws_json1_1UnlinkDeveloperIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UnlinkDeveloperIdentityCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1UnlinkDeveloperIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
export const deserializeAws_json1_1UnlinkIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UnlinkIdentityCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1UnlinkIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExternalServiceException":
        case "com.amazonaws.cognitoidentity#ExternalServiceException":
            throw await deserializeAws_json1_1ExternalServiceExceptionResponse(parsedOutput, context);
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
export const deserializeAws_json1_1UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
export const deserializeAws_json1_1UpdateIdentityPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateIdentityPoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1IdentityPool(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1UpdateIdentityPoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.cognitoidentity#ConcurrentModificationException":
            throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentity#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
    const exception = new ConcurrentModificationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const deserializeAws_json1_1DeveloperUserAlreadyRegisteredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeveloperUserAlreadyRegisteredException(body, context);
    const exception = new DeveloperUserAlreadyRegisteredException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const deserializeAws_json1_1ExternalServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ExternalServiceException(body, context);
    const exception = new ExternalServiceException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const deserializeAws_json1_1InternalErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalErrorException(body, context);
    const exception = new InternalErrorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const deserializeAws_json1_1InvalidIdentityPoolConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidIdentityPoolConfigurationException(body, context);
    const exception = new InvalidIdentityPoolConfigurationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const exception = new InvalidParameterException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const exception = new LimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const deserializeAws_json1_1NotAuthorizedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotAuthorizedException(body, context);
    const exception = new NotAuthorizedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const deserializeAws_json1_1ResourceConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceConflictException(body, context);
    const exception = new ResourceConflictException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const exception = new ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyRequestsException(body, context);
    const exception = new TooManyRequestsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const serializeAws_json1_1CognitoIdentityProvider = (input, context) => {
    return {
        ...(input.ClientId != null && { ClientId: input.ClientId }),
        ...(input.ProviderName != null && { ProviderName: input.ProviderName }),
        ...(input.ServerSideTokenCheck != null && { ServerSideTokenCheck: input.ServerSideTokenCheck }),
    };
};
const serializeAws_json1_1CognitoIdentityProviderList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return serializeAws_json1_1CognitoIdentityProvider(entry, context);
    });
};
const serializeAws_json1_1CreateIdentityPoolInput = (input, context) => {
    return {
        ...(input.AllowClassicFlow != null && { AllowClassicFlow: input.AllowClassicFlow }),
        ...(input.AllowUnauthenticatedIdentities != null && {
            AllowUnauthenticatedIdentities: input.AllowUnauthenticatedIdentities,
        }),
        ...(input.CognitoIdentityProviders != null && {
            CognitoIdentityProviders: serializeAws_json1_1CognitoIdentityProviderList(input.CognitoIdentityProviders, context),
        }),
        ...(input.DeveloperProviderName != null && { DeveloperProviderName: input.DeveloperProviderName }),
        ...(input.IdentityPoolName != null && { IdentityPoolName: input.IdentityPoolName }),
        ...(input.IdentityPoolTags != null && {
            IdentityPoolTags: serializeAws_json1_1IdentityPoolTagsType(input.IdentityPoolTags, context),
        }),
        ...(input.OpenIdConnectProviderARNs != null && {
            OpenIdConnectProviderARNs: serializeAws_json1_1OIDCProviderList(input.OpenIdConnectProviderARNs, context),
        }),
        ...(input.SamlProviderARNs != null && {
            SamlProviderARNs: serializeAws_json1_1SAMLProviderList(input.SamlProviderARNs, context),
        }),
        ...(input.SupportedLoginProviders != null && {
            SupportedLoginProviders: serializeAws_json1_1IdentityProviders(input.SupportedLoginProviders, context),
        }),
    };
};
const serializeAws_json1_1DeleteIdentitiesInput = (input, context) => {
    return {
        ...(input.IdentityIdsToDelete != null && {
            IdentityIdsToDelete: serializeAws_json1_1IdentityIdList(input.IdentityIdsToDelete, context),
        }),
    };
};
const serializeAws_json1_1DeleteIdentityPoolInput = (input, context) => {
    return {
        ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
    };
};
const serializeAws_json1_1DescribeIdentityInput = (input, context) => {
    return {
        ...(input.IdentityId != null && { IdentityId: input.IdentityId }),
    };
};
const serializeAws_json1_1DescribeIdentityPoolInput = (input, context) => {
    return {
        ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
    };
};
const serializeAws_json1_1GetCredentialsForIdentityInput = (input, context) => {
    return {
        ...(input.CustomRoleArn != null && { CustomRoleArn: input.CustomRoleArn }),
        ...(input.IdentityId != null && { IdentityId: input.IdentityId }),
        ...(input.Logins != null && { Logins: serializeAws_json1_1LoginsMap(input.Logins, context) }),
    };
};
const serializeAws_json1_1GetIdentityPoolRolesInput = (input, context) => {
    return {
        ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
    };
};
const serializeAws_json1_1GetIdInput = (input, context) => {
    return {
        ...(input.AccountId != null && { AccountId: input.AccountId }),
        ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
        ...(input.Logins != null && { Logins: serializeAws_json1_1LoginsMap(input.Logins, context) }),
    };
};
const serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityInput = (input, context) => {
    return {
        ...(input.IdentityId != null && { IdentityId: input.IdentityId }),
        ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
        ...(input.Logins != null && { Logins: serializeAws_json1_1LoginsMap(input.Logins, context) }),
        ...(input.PrincipalTags != null && {
            PrincipalTags: serializeAws_json1_1PrincipalTags(input.PrincipalTags, context),
        }),
        ...(input.TokenDuration != null && { TokenDuration: input.TokenDuration }),
    };
};
const serializeAws_json1_1GetOpenIdTokenInput = (input, context) => {
    return {
        ...(input.IdentityId != null && { IdentityId: input.IdentityId }),
        ...(input.Logins != null && { Logins: serializeAws_json1_1LoginsMap(input.Logins, context) }),
    };
};
const serializeAws_json1_1GetPrincipalTagAttributeMapInput = (input, context) => {
    return {
        ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
        ...(input.IdentityProviderName != null && { IdentityProviderName: input.IdentityProviderName }),
    };
};
const serializeAws_json1_1IdentityIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return entry;
    });
};
const serializeAws_json1_1IdentityPool = (input, context) => {
    return {
        ...(input.AllowClassicFlow != null && { AllowClassicFlow: input.AllowClassicFlow }),
        ...(input.AllowUnauthenticatedIdentities != null && {
            AllowUnauthenticatedIdentities: input.AllowUnauthenticatedIdentities,
        }),
        ...(input.CognitoIdentityProviders != null && {
            CognitoIdentityProviders: serializeAws_json1_1CognitoIdentityProviderList(input.CognitoIdentityProviders, context),
        }),
        ...(input.DeveloperProviderName != null && { DeveloperProviderName: input.DeveloperProviderName }),
        ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
        ...(input.IdentityPoolName != null && { IdentityPoolName: input.IdentityPoolName }),
        ...(input.IdentityPoolTags != null && {
            IdentityPoolTags: serializeAws_json1_1IdentityPoolTagsType(input.IdentityPoolTags, context),
        }),
        ...(input.OpenIdConnectProviderARNs != null && {
            OpenIdConnectProviderARNs: serializeAws_json1_1OIDCProviderList(input.OpenIdConnectProviderARNs, context),
        }),
        ...(input.SamlProviderARNs != null && {
            SamlProviderARNs: serializeAws_json1_1SAMLProviderList(input.SamlProviderARNs, context),
        }),
        ...(input.SupportedLoginProviders != null && {
            SupportedLoginProviders: serializeAws_json1_1IdentityProviders(input.SupportedLoginProviders, context),
        }),
    };
};
const serializeAws_json1_1IdentityPoolTagsListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return entry;
    });
};
const serializeAws_json1_1IdentityPoolTagsType = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = value;
        return acc;
    }, {});
};
const serializeAws_json1_1IdentityProviders = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = value;
        return acc;
    }, {});
};
const serializeAws_json1_1ListIdentitiesInput = (input, context) => {
    return {
        ...(input.HideDisabled != null && { HideDisabled: input.HideDisabled }),
        ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
        ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
        ...(input.NextToken != null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListIdentityPoolsInput = (input, context) => {
    return {
        ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
        ...(input.NextToken != null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceInput = (input, context) => {
    return {
        ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1LoginsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return entry;
    });
};
const serializeAws_json1_1LoginsMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = value;
        return acc;
    }, {});
};
const serializeAws_json1_1LookupDeveloperIdentityInput = (input, context) => {
    return {
        ...(input.DeveloperUserIdentifier != null && { DeveloperUserIdentifier: input.DeveloperUserIdentifier }),
        ...(input.IdentityId != null && { IdentityId: input.IdentityId }),
        ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
        ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
        ...(input.NextToken != null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1MappingRule = (input, context) => {
    return {
        ...(input.Claim != null && { Claim: input.Claim }),
        ...(input.MatchType != null && { MatchType: input.MatchType }),
        ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
        ...(input.Value != null && { Value: input.Value }),
    };
};
const serializeAws_json1_1MappingRulesList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return serializeAws_json1_1MappingRule(entry, context);
    });
};
const serializeAws_json1_1MergeDeveloperIdentitiesInput = (input, context) => {
    return {
        ...(input.DestinationUserIdentifier != null && { DestinationUserIdentifier: input.DestinationUserIdentifier }),
        ...(input.DeveloperProviderName != null && { DeveloperProviderName: input.DeveloperProviderName }),
        ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
        ...(input.SourceUserIdentifier != null && { SourceUserIdentifier: input.SourceUserIdentifier }),
    };
};
const serializeAws_json1_1OIDCProviderList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return entry;
    });
};
const serializeAws_json1_1PrincipalTags = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = value;
        return acc;
    }, {});
};
const serializeAws_json1_1RoleMapping = (input, context) => {
    return {
        ...(input.AmbiguousRoleResolution != null && { AmbiguousRoleResolution: input.AmbiguousRoleResolution }),
        ...(input.RulesConfiguration != null && {
            RulesConfiguration: serializeAws_json1_1RulesConfigurationType(input.RulesConfiguration, context),
        }),
        ...(input.Type != null && { Type: input.Type }),
    };
};
const serializeAws_json1_1RoleMappingMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = serializeAws_json1_1RoleMapping(value, context);
        return acc;
    }, {});
};
const serializeAws_json1_1RolesMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = value;
        return acc;
    }, {});
};
const serializeAws_json1_1RulesConfigurationType = (input, context) => {
    return {
        ...(input.Rules != null && { Rules: serializeAws_json1_1MappingRulesList(input.Rules, context) }),
    };
};
const serializeAws_json1_1SAMLProviderList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return entry;
    });
};
const serializeAws_json1_1SetIdentityPoolRolesInput = (input, context) => {
    return {
        ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
        ...(input.RoleMappings != null && {
            RoleMappings: serializeAws_json1_1RoleMappingMap(input.RoleMappings, context),
        }),
        ...(input.Roles != null && { Roles: serializeAws_json1_1RolesMap(input.Roles, context) }),
    };
};
const serializeAws_json1_1SetPrincipalTagAttributeMapInput = (input, context) => {
    return {
        ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
        ...(input.IdentityProviderName != null && { IdentityProviderName: input.IdentityProviderName }),
        ...(input.PrincipalTags != null && {
            PrincipalTags: serializeAws_json1_1PrincipalTags(input.PrincipalTags, context),
        }),
        ...(input.UseDefaults != null && { UseDefaults: input.UseDefaults }),
    };
};
const serializeAws_json1_1TagResourceInput = (input, context) => {
    return {
        ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
        ...(input.Tags != null && { Tags: serializeAws_json1_1IdentityPoolTagsType(input.Tags, context) }),
    };
};
const serializeAws_json1_1UnlinkDeveloperIdentityInput = (input, context) => {
    return {
        ...(input.DeveloperProviderName != null && { DeveloperProviderName: input.DeveloperProviderName }),
        ...(input.DeveloperUserIdentifier != null && { DeveloperUserIdentifier: input.DeveloperUserIdentifier }),
        ...(input.IdentityId != null && { IdentityId: input.IdentityId }),
        ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
    };
};
const serializeAws_json1_1UnlinkIdentityInput = (input, context) => {
    return {
        ...(input.IdentityId != null && { IdentityId: input.IdentityId }),
        ...(input.Logins != null && { Logins: serializeAws_json1_1LoginsMap(input.Logins, context) }),
        ...(input.LoginsToRemove != null && {
            LoginsToRemove: serializeAws_json1_1LoginsList(input.LoginsToRemove, context),
        }),
    };
};
const serializeAws_json1_1UntagResourceInput = (input, context) => {
    return {
        ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
        ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1IdentityPoolTagsListType(input.TagKeys, context) }),
    };
};
const deserializeAws_json1_1CognitoIdentityProvider = (output, context) => {
    return {
        ClientId: __expectString(output.ClientId),
        ProviderName: __expectString(output.ProviderName),
        ServerSideTokenCheck: __expectBoolean(output.ServerSideTokenCheck),
    };
};
const deserializeAws_json1_1CognitoIdentityProviderList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CognitoIdentityProvider(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
    return {
        message: __expectString(output.message),
    };
};
const deserializeAws_json1_1Credentials = (output, context) => {
    return {
        AccessKeyId: __expectString(output.AccessKeyId),
        Expiration: output.Expiration != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Expiration))) : undefined,
        SecretKey: __expectString(output.SecretKey),
        SessionToken: __expectString(output.SessionToken),
    };
};
const deserializeAws_json1_1DeleteIdentitiesResponse = (output, context) => {
    return {
        UnprocessedIdentityIds: output.UnprocessedIdentityIds != null
            ? deserializeAws_json1_1UnprocessedIdentityIdList(output.UnprocessedIdentityIds, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeveloperUserAlreadyRegisteredException = (output, context) => {
    return {
        message: __expectString(output.message),
    };
};
const deserializeAws_json1_1DeveloperUserIdentifierList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return __expectString(entry);
    });
    return retVal;
};
const deserializeAws_json1_1ExternalServiceException = (output, context) => {
    return {
        message: __expectString(output.message),
    };
};
const deserializeAws_json1_1GetCredentialsForIdentityResponse = (output, context) => {
    return {
        Credentials: output.Credentials != null ? deserializeAws_json1_1Credentials(output.Credentials, context) : undefined,
        IdentityId: __expectString(output.IdentityId),
    };
};
const deserializeAws_json1_1GetIdentityPoolRolesResponse = (output, context) => {
    return {
        IdentityPoolId: __expectString(output.IdentityPoolId),
        RoleMappings: output.RoleMappings != null ? deserializeAws_json1_1RoleMappingMap(output.RoleMappings, context) : undefined,
        Roles: output.Roles != null ? deserializeAws_json1_1RolesMap(output.Roles, context) : undefined,
    };
};
const deserializeAws_json1_1GetIdResponse = (output, context) => {
    return {
        IdentityId: __expectString(output.IdentityId),
    };
};
const deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityResponse = (output, context) => {
    return {
        IdentityId: __expectString(output.IdentityId),
        Token: __expectString(output.Token),
    };
};
const deserializeAws_json1_1GetOpenIdTokenResponse = (output, context) => {
    return {
        IdentityId: __expectString(output.IdentityId),
        Token: __expectString(output.Token),
    };
};
const deserializeAws_json1_1GetPrincipalTagAttributeMapResponse = (output, context) => {
    return {
        IdentityPoolId: __expectString(output.IdentityPoolId),
        IdentityProviderName: __expectString(output.IdentityProviderName),
        PrincipalTags: output.PrincipalTags != null ? deserializeAws_json1_1PrincipalTags(output.PrincipalTags, context) : undefined,
        UseDefaults: __expectBoolean(output.UseDefaults),
    };
};
const deserializeAws_json1_1IdentitiesList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1IdentityDescription(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1IdentityDescription = (output, context) => {
    return {
        CreationDate: output.CreationDate != null
            ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
            : undefined,
        IdentityId: __expectString(output.IdentityId),
        LastModifiedDate: output.LastModifiedDate != null
            ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
            : undefined,
        Logins: output.Logins != null ? deserializeAws_json1_1LoginsList(output.Logins, context) : undefined,
    };
};
const deserializeAws_json1_1IdentityPool = (output, context) => {
    return {
        AllowClassicFlow: __expectBoolean(output.AllowClassicFlow),
        AllowUnauthenticatedIdentities: __expectBoolean(output.AllowUnauthenticatedIdentities),
        CognitoIdentityProviders: output.CognitoIdentityProviders != null
            ? deserializeAws_json1_1CognitoIdentityProviderList(output.CognitoIdentityProviders, context)
            : undefined,
        DeveloperProviderName: __expectString(output.DeveloperProviderName),
        IdentityPoolId: __expectString(output.IdentityPoolId),
        IdentityPoolName: __expectString(output.IdentityPoolName),
        IdentityPoolTags: output.IdentityPoolTags != null
            ? deserializeAws_json1_1IdentityPoolTagsType(output.IdentityPoolTags, context)
            : undefined,
        OpenIdConnectProviderARNs: output.OpenIdConnectProviderARNs != null
            ? deserializeAws_json1_1OIDCProviderList(output.OpenIdConnectProviderARNs, context)
            : undefined,
        SamlProviderARNs: output.SamlProviderARNs != null
            ? deserializeAws_json1_1SAMLProviderList(output.SamlProviderARNs, context)
            : undefined,
        SupportedLoginProviders: output.SupportedLoginProviders != null
            ? deserializeAws_json1_1IdentityProviders(output.SupportedLoginProviders, context)
            : undefined,
    };
};
const deserializeAws_json1_1IdentityPoolShortDescription = (output, context) => {
    return {
        IdentityPoolId: __expectString(output.IdentityPoolId),
        IdentityPoolName: __expectString(output.IdentityPoolName),
    };
};
const deserializeAws_json1_1IdentityPoolsList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1IdentityPoolShortDescription(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1IdentityPoolTagsType = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = __expectString(value);
        return acc;
    }, {});
};
const deserializeAws_json1_1IdentityProviders = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = __expectString(value);
        return acc;
    }, {});
};
const deserializeAws_json1_1InternalErrorException = (output, context) => {
    return {
        message: __expectString(output.message),
    };
};
const deserializeAws_json1_1InvalidIdentityPoolConfigurationException = (output, context) => {
    return {
        message: __expectString(output.message),
    };
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    return {
        message: __expectString(output.message),
    };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        message: __expectString(output.message),
    };
};
const deserializeAws_json1_1ListIdentitiesResponse = (output, context) => {
    return {
        Identities: output.Identities != null ? deserializeAws_json1_1IdentitiesList(output.Identities, context) : undefined,
        IdentityPoolId: __expectString(output.IdentityPoolId),
        NextToken: __expectString(output.NextToken),
    };
};
const deserializeAws_json1_1ListIdentityPoolsResponse = (output, context) => {
    return {
        IdentityPools: output.IdentityPools != null ? deserializeAws_json1_1IdentityPoolsList(output.IdentityPools, context) : undefined,
        NextToken: __expectString(output.NextToken),
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        Tags: output.Tags != null ? deserializeAws_json1_1IdentityPoolTagsType(output.Tags, context) : undefined,
    };
};
const deserializeAws_json1_1LoginsList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return __expectString(entry);
    });
    return retVal;
};
const deserializeAws_json1_1LookupDeveloperIdentityResponse = (output, context) => {
    return {
        DeveloperUserIdentifierList: output.DeveloperUserIdentifierList != null
            ? deserializeAws_json1_1DeveloperUserIdentifierList(output.DeveloperUserIdentifierList, context)
            : undefined,
        IdentityId: __expectString(output.IdentityId),
        NextToken: __expectString(output.NextToken),
    };
};
const deserializeAws_json1_1MappingRule = (output, context) => {
    return {
        Claim: __expectString(output.Claim),
        MatchType: __expectString(output.MatchType),
        RoleARN: __expectString(output.RoleARN),
        Value: __expectString(output.Value),
    };
};
const deserializeAws_json1_1MappingRulesList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MappingRule(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1MergeDeveloperIdentitiesResponse = (output, context) => {
    return {
        IdentityId: __expectString(output.IdentityId),
    };
};
const deserializeAws_json1_1NotAuthorizedException = (output, context) => {
    return {
        message: __expectString(output.message),
    };
};
const deserializeAws_json1_1OIDCProviderList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return __expectString(entry);
    });
    return retVal;
};
const deserializeAws_json1_1PrincipalTags = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = __expectString(value);
        return acc;
    }, {});
};
const deserializeAws_json1_1ResourceConflictException = (output, context) => {
    return {
        message: __expectString(output.message),
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        message: __expectString(output.message),
    };
};
const deserializeAws_json1_1RoleMapping = (output, context) => {
    return {
        AmbiguousRoleResolution: __expectString(output.AmbiguousRoleResolution),
        RulesConfiguration: output.RulesConfiguration != null
            ? deserializeAws_json1_1RulesConfigurationType(output.RulesConfiguration, context)
            : undefined,
        Type: __expectString(output.Type),
    };
};
const deserializeAws_json1_1RoleMappingMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = deserializeAws_json1_1RoleMapping(value, context);
        return acc;
    }, {});
};
const deserializeAws_json1_1RolesMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = __expectString(value);
        return acc;
    }, {});
};
const deserializeAws_json1_1RulesConfigurationType = (output, context) => {
    return {
        Rules: output.Rules != null ? deserializeAws_json1_1MappingRulesList(output.Rules, context) : undefined,
    };
};
const deserializeAws_json1_1SAMLProviderList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return __expectString(entry);
    });
    return retVal;
};
const deserializeAws_json1_1SetPrincipalTagAttributeMapResponse = (output, context) => {
    return {
        IdentityPoolId: __expectString(output.IdentityPoolId),
        IdentityProviderName: __expectString(output.IdentityProviderName),
        PrincipalTags: output.PrincipalTags != null ? deserializeAws_json1_1PrincipalTags(output.PrincipalTags, context) : undefined,
        UseDefaults: __expectBoolean(output.UseDefaults),
    };
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1TooManyRequestsException = (output, context) => {
    return {
        message: __expectString(output.message),
    };
};
const deserializeAws_json1_1UnprocessedIdentityId = (output, context) => {
    return {
        ErrorCode: __expectString(output.ErrorCode),
        IdentityId: __expectString(output.IdentityId),
    };
};
const deserializeAws_json1_1UnprocessedIdentityIdList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UnprocessedIdentityId(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new __HttpRequest(contents);
};
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const parseErrorBody = async (errorBody, context) => {
    const value = await parseBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};
