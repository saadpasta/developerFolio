"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveClientEndpointParameters = void 0;
const resolveClientEndpointParameters = (options) => {
    return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "awsssooidc",
    };
};
exports.resolveClientEndpointParameters = resolveClientEndpointParameters;
