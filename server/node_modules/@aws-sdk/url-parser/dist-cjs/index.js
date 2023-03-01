"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUrl = void 0;
const querystring_parser_1 = require("@aws-sdk/querystring-parser");
const parseUrl = (url) => {
    if (typeof url === "string") {
        return (0, exports.parseUrl)(new URL(url));
    }
    const { hostname, pathname, port, protocol, search } = url;
    let query;
    if (search) {
        query = (0, querystring_parser_1.parseQueryString)(search);
    }
    return {
        hostname,
        port: port ? parseInt(port) : undefined,
        protocol,
        path: pathname,
        query,
    };
};
exports.parseUrl = parseUrl;
