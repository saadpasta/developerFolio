"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toEndpointV1 = void 0;
const url_parser_1 = require("@aws-sdk/url-parser");
const toEndpointV1 = (endpoint) => {
    if (typeof endpoint === "object") {
        if ("url" in endpoint) {
            return (0, url_parser_1.parseUrl)(endpoint.url);
        }
        return endpoint;
    }
    return (0, url_parser_1.parseUrl)(endpoint);
};
exports.toEndpointV1 = toEndpointV1;
