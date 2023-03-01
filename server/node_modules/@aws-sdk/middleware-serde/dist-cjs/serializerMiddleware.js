"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializerMiddleware = void 0;
const serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
    var _a;
    const endpoint = ((_a = context.endpointV2) === null || _a === void 0 ? void 0 : _a.url) && options.urlParser
        ? async () => options.urlParser(context.endpointV2.url)
        : options.endpoint;
    if (!endpoint) {
        throw new Error("No valid endpoint provider available.");
    }
    const request = await serializer(args.input, { ...options, endpoint });
    return next({
        ...args,
        request,
    });
};
exports.serializerMiddleware = serializerMiddleware;
