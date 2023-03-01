"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRuntimeConfig = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
const url_parser_1 = require("@aws-sdk/url-parser");
const util_base64_1 = require("@aws-sdk/util-base64");
const util_utf8_1 = require("@aws-sdk/util-utf8");
const endpointResolver_1 = require("./endpoint/endpointResolver");
const getRuntimeConfig = (config) => ({
    apiVersion: "2019-06-10",
    base64Decoder: config?.base64Decoder ?? util_base64_1.fromBase64,
    base64Encoder: config?.base64Encoder ?? util_base64_1.toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? endpointResolver_1.defaultEndpointResolver,
    logger: config?.logger ?? new smithy_client_1.NoOpLogger(),
    serviceId: config?.serviceId ?? "SSO",
    urlParser: config?.urlParser ?? url_parser_1.parseUrl,
    utf8Decoder: config?.utf8Decoder ?? util_utf8_1.fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? util_utf8_1.toUtf8,
});
exports.getRuntimeConfig = getRuntimeConfig;
