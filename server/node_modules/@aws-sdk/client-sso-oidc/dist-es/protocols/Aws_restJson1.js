import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { decorateServiceException as __decorateServiceException, expectInt32 as __expectInt32, expectLong as __expectLong, expectNonNull as __expectNonNull, expectObject as __expectObject, expectString as __expectString, map as __map, throwDefaultError, } from "@aws-sdk/smithy-client";
import { AccessDeniedException, AuthorizationPendingException, ExpiredTokenException, InternalServerException, InvalidClientException, InvalidClientMetadataException, InvalidGrantException, InvalidRequestException, InvalidScopeException, SlowDownException, UnauthorizedClientException, UnsupportedGrantTypeException, } from "../models/models_0";
import { SSOOIDCServiceException as __BaseException } from "../models/SSOOIDCServiceException";
export const serializeAws_restJson1CreateTokenCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/token";
    let body;
    body = JSON.stringify({
        ...(input.clientId != null && { clientId: input.clientId }),
        ...(input.clientSecret != null && { clientSecret: input.clientSecret }),
        ...(input.code != null && { code: input.code }),
        ...(input.deviceCode != null && { deviceCode: input.deviceCode }),
        ...(input.grantType != null && { grantType: input.grantType }),
        ...(input.redirectUri != null && { redirectUri: input.redirectUri }),
        ...(input.refreshToken != null && { refreshToken: input.refreshToken }),
        ...(input.scope != null && { scope: serializeAws_restJson1Scopes(input.scope, context) }),
    });
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
export const serializeAws_restJson1RegisterClientCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/client/register";
    let body;
    body = JSON.stringify({
        ...(input.clientName != null && { clientName: input.clientName }),
        ...(input.clientType != null && { clientType: input.clientType }),
        ...(input.scopes != null && { scopes: serializeAws_restJson1Scopes(input.scopes, context) }),
    });
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
export const serializeAws_restJson1StartDeviceAuthorizationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/device_authorization";
    let body;
    body = JSON.stringify({
        ...(input.clientId != null && { clientId: input.clientId }),
        ...(input.clientSecret != null && { clientSecret: input.clientSecret }),
        ...(input.startUrl != null && { startUrl: input.startUrl }),
    });
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
export const deserializeAws_restJson1CreateTokenCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateTokenCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data.accessToken != null) {
        contents.accessToken = __expectString(data.accessToken);
    }
    if (data.expiresIn != null) {
        contents.expiresIn = __expectInt32(data.expiresIn);
    }
    if (data.idToken != null) {
        contents.idToken = __expectString(data.idToken);
    }
    if (data.refreshToken != null) {
        contents.refreshToken = __expectString(data.refreshToken);
    }
    if (data.tokenType != null) {
        contents.tokenType = __expectString(data.tokenType);
    }
    return contents;
};
const deserializeAws_restJson1CreateTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssooidc#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "AuthorizationPendingException":
        case "com.amazonaws.ssooidc#AuthorizationPendingException":
            throw await deserializeAws_restJson1AuthorizationPendingExceptionResponse(parsedOutput, context);
        case "ExpiredTokenException":
        case "com.amazonaws.ssooidc#ExpiredTokenException":
            throw await deserializeAws_restJson1ExpiredTokenExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "InvalidClientException":
        case "com.amazonaws.ssooidc#InvalidClientException":
            throw await deserializeAws_restJson1InvalidClientExceptionResponse(parsedOutput, context);
        case "InvalidGrantException":
        case "com.amazonaws.ssooidc#InvalidGrantException":
            throw await deserializeAws_restJson1InvalidGrantExceptionResponse(parsedOutput, context);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
            throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
        case "InvalidScopeException":
        case "com.amazonaws.ssooidc#InvalidScopeException":
            throw await deserializeAws_restJson1InvalidScopeExceptionResponse(parsedOutput, context);
        case "SlowDownException":
        case "com.amazonaws.ssooidc#SlowDownException":
            throw await deserializeAws_restJson1SlowDownExceptionResponse(parsedOutput, context);
        case "UnauthorizedClientException":
        case "com.amazonaws.ssooidc#UnauthorizedClientException":
            throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
        case "UnsupportedGrantTypeException":
        case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
            throw await deserializeAws_restJson1UnsupportedGrantTypeExceptionResponse(parsedOutput, context);
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
export const deserializeAws_restJson1RegisterClientCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RegisterClientCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data.authorizationEndpoint != null) {
        contents.authorizationEndpoint = __expectString(data.authorizationEndpoint);
    }
    if (data.clientId != null) {
        contents.clientId = __expectString(data.clientId);
    }
    if (data.clientIdIssuedAt != null) {
        contents.clientIdIssuedAt = __expectLong(data.clientIdIssuedAt);
    }
    if (data.clientSecret != null) {
        contents.clientSecret = __expectString(data.clientSecret);
    }
    if (data.clientSecretExpiresAt != null) {
        contents.clientSecretExpiresAt = __expectLong(data.clientSecretExpiresAt);
    }
    if (data.tokenEndpoint != null) {
        contents.tokenEndpoint = __expectString(data.tokenEndpoint);
    }
    return contents;
};
const deserializeAws_restJson1RegisterClientCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "InvalidClientMetadataException":
        case "com.amazonaws.ssooidc#InvalidClientMetadataException":
            throw await deserializeAws_restJson1InvalidClientMetadataExceptionResponse(parsedOutput, context);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
            throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
        case "InvalidScopeException":
        case "com.amazonaws.ssooidc#InvalidScopeException":
            throw await deserializeAws_restJson1InvalidScopeExceptionResponse(parsedOutput, context);
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
export const deserializeAws_restJson1StartDeviceAuthorizationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartDeviceAuthorizationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data.deviceCode != null) {
        contents.deviceCode = __expectString(data.deviceCode);
    }
    if (data.expiresIn != null) {
        contents.expiresIn = __expectInt32(data.expiresIn);
    }
    if (data.interval != null) {
        contents.interval = __expectInt32(data.interval);
    }
    if (data.userCode != null) {
        contents.userCode = __expectString(data.userCode);
    }
    if (data.verificationUri != null) {
        contents.verificationUri = __expectString(data.verificationUri);
    }
    if (data.verificationUriComplete != null) {
        contents.verificationUriComplete = __expectString(data.verificationUriComplete);
    }
    return contents;
};
const deserializeAws_restJson1StartDeviceAuthorizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "InvalidClientException":
        case "com.amazonaws.ssooidc#InvalidClientException":
            throw await deserializeAws_restJson1InvalidClientExceptionResponse(parsedOutput, context);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
            throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
        case "SlowDownException":
        case "com.amazonaws.ssooidc#SlowDownException":
            throw await deserializeAws_restJson1SlowDownExceptionResponse(parsedOutput, context);
        case "UnauthorizedClientException":
        case "com.amazonaws.ssooidc#UnauthorizedClientException":
            throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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
const map = __map;
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = __expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = __expectString(data.error_description);
    }
    const exception = new AccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1AuthorizationPendingExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = __expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = __expectString(data.error_description);
    }
    const exception = new AuthorizationPendingException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1ExpiredTokenExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = __expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = __expectString(data.error_description);
    }
    const exception = new ExpiredTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = __expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = __expectString(data.error_description);
    }
    const exception = new InternalServerException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1InvalidClientExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = __expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = __expectString(data.error_description);
    }
    const exception = new InvalidClientException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1InvalidClientMetadataExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = __expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = __expectString(data.error_description);
    }
    const exception = new InvalidClientMetadataException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1InvalidGrantExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = __expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = __expectString(data.error_description);
    }
    const exception = new InvalidGrantException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = __expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = __expectString(data.error_description);
    }
    const exception = new InvalidRequestException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1InvalidScopeExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = __expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = __expectString(data.error_description);
    }
    const exception = new InvalidScopeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1SlowDownExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = __expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = __expectString(data.error_description);
    }
    const exception = new SlowDownException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1UnauthorizedClientExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = __expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = __expectString(data.error_description);
    }
    const exception = new UnauthorizedClientException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1UnsupportedGrantTypeExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = __expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = __expectString(data.error_description);
    }
    const exception = new UnsupportedGrantTypeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const serializeAws_restJson1Scopes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return entry;
    });
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
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
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
