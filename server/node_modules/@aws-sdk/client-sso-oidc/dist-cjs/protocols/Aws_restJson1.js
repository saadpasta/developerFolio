"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1StartDeviceAuthorizationCommand = exports.deserializeAws_restJson1RegisterClientCommand = exports.deserializeAws_restJson1CreateTokenCommand = exports.serializeAws_restJson1StartDeviceAuthorizationCommand = exports.serializeAws_restJson1RegisterClientCommand = exports.serializeAws_restJson1CreateTokenCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const models_0_1 = require("../models/models_0");
const SSOOIDCServiceException_1 = require("../models/SSOOIDCServiceException");
const serializeAws_restJson1CreateTokenCommand = async (input, context) => {
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
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateTokenCommand = serializeAws_restJson1CreateTokenCommand;
const serializeAws_restJson1RegisterClientCommand = async (input, context) => {
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
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1RegisterClientCommand = serializeAws_restJson1RegisterClientCommand;
const serializeAws_restJson1StartDeviceAuthorizationCommand = async (input, context) => {
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
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1StartDeviceAuthorizationCommand = serializeAws_restJson1StartDeviceAuthorizationCommand;
const deserializeAws_restJson1CreateTokenCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateTokenCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.accessToken != null) {
        contents.accessToken = (0, smithy_client_1.expectString)(data.accessToken);
    }
    if (data.expiresIn != null) {
        contents.expiresIn = (0, smithy_client_1.expectInt32)(data.expiresIn);
    }
    if (data.idToken != null) {
        contents.idToken = (0, smithy_client_1.expectString)(data.idToken);
    }
    if (data.refreshToken != null) {
        contents.refreshToken = (0, smithy_client_1.expectString)(data.refreshToken);
    }
    if (data.tokenType != null) {
        contents.tokenType = (0, smithy_client_1.expectString)(data.tokenType);
    }
    return contents;
};
exports.deserializeAws_restJson1CreateTokenCommand = deserializeAws_restJson1CreateTokenCommand;
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
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: SSOOIDCServiceException_1.SSOOIDCServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1RegisterClientCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RegisterClientCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.authorizationEndpoint != null) {
        contents.authorizationEndpoint = (0, smithy_client_1.expectString)(data.authorizationEndpoint);
    }
    if (data.clientId != null) {
        contents.clientId = (0, smithy_client_1.expectString)(data.clientId);
    }
    if (data.clientIdIssuedAt != null) {
        contents.clientIdIssuedAt = (0, smithy_client_1.expectLong)(data.clientIdIssuedAt);
    }
    if (data.clientSecret != null) {
        contents.clientSecret = (0, smithy_client_1.expectString)(data.clientSecret);
    }
    if (data.clientSecretExpiresAt != null) {
        contents.clientSecretExpiresAt = (0, smithy_client_1.expectLong)(data.clientSecretExpiresAt);
    }
    if (data.tokenEndpoint != null) {
        contents.tokenEndpoint = (0, smithy_client_1.expectString)(data.tokenEndpoint);
    }
    return contents;
};
exports.deserializeAws_restJson1RegisterClientCommand = deserializeAws_restJson1RegisterClientCommand;
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
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: SSOOIDCServiceException_1.SSOOIDCServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1StartDeviceAuthorizationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartDeviceAuthorizationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.deviceCode != null) {
        contents.deviceCode = (0, smithy_client_1.expectString)(data.deviceCode);
    }
    if (data.expiresIn != null) {
        contents.expiresIn = (0, smithy_client_1.expectInt32)(data.expiresIn);
    }
    if (data.interval != null) {
        contents.interval = (0, smithy_client_1.expectInt32)(data.interval);
    }
    if (data.userCode != null) {
        contents.userCode = (0, smithy_client_1.expectString)(data.userCode);
    }
    if (data.verificationUri != null) {
        contents.verificationUri = (0, smithy_client_1.expectString)(data.verificationUri);
    }
    if (data.verificationUriComplete != null) {
        contents.verificationUriComplete = (0, smithy_client_1.expectString)(data.verificationUriComplete);
    }
    return contents;
};
exports.deserializeAws_restJson1StartDeviceAuthorizationCommand = deserializeAws_restJson1StartDeviceAuthorizationCommand;
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
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: SSOOIDCServiceException_1.SSOOIDCServiceException,
                errorCode,
            });
    }
};
const map = smithy_client_1.map;
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = (0, smithy_client_1.expectString)(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = (0, smithy_client_1.expectString)(data.error_description);
    }
    const exception = new models_0_1.AccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1AuthorizationPendingExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = (0, smithy_client_1.expectString)(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = (0, smithy_client_1.expectString)(data.error_description);
    }
    const exception = new models_0_1.AuthorizationPendingException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1ExpiredTokenExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = (0, smithy_client_1.expectString)(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = (0, smithy_client_1.expectString)(data.error_description);
    }
    const exception = new models_0_1.ExpiredTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = (0, smithy_client_1.expectString)(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = (0, smithy_client_1.expectString)(data.error_description);
    }
    const exception = new models_0_1.InternalServerException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1InvalidClientExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = (0, smithy_client_1.expectString)(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = (0, smithy_client_1.expectString)(data.error_description);
    }
    const exception = new models_0_1.InvalidClientException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1InvalidClientMetadataExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = (0, smithy_client_1.expectString)(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = (0, smithy_client_1.expectString)(data.error_description);
    }
    const exception = new models_0_1.InvalidClientMetadataException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1InvalidGrantExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = (0, smithy_client_1.expectString)(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = (0, smithy_client_1.expectString)(data.error_description);
    }
    const exception = new models_0_1.InvalidGrantException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = (0, smithy_client_1.expectString)(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = (0, smithy_client_1.expectString)(data.error_description);
    }
    const exception = new models_0_1.InvalidRequestException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1InvalidScopeExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = (0, smithy_client_1.expectString)(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = (0, smithy_client_1.expectString)(data.error_description);
    }
    const exception = new models_0_1.InvalidScopeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1SlowDownExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = (0, smithy_client_1.expectString)(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = (0, smithy_client_1.expectString)(data.error_description);
    }
    const exception = new models_0_1.SlowDownException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1UnauthorizedClientExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = (0, smithy_client_1.expectString)(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = (0, smithy_client_1.expectString)(data.error_description);
    }
    const exception = new models_0_1.UnauthorizedClientException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1UnsupportedGrantTypeExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = (0, smithy_client_1.expectString)(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = (0, smithy_client_1.expectString)(data.error_description);
    }
    const exception = new models_0_1.UnsupportedGrantTypeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
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
