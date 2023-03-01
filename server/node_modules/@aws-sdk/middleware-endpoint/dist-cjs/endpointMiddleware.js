"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpointMiddleware = void 0;
const getEndpointFromInstructions_1 = require("./adaptors/getEndpointFromInstructions");
const endpointMiddleware = ({ config, instructions, }) => {
    return (next, context) => async (args) => {
        var _a, _b;
        const endpoint = await (0, getEndpointFromInstructions_1.getEndpointFromInstructions)(args.input, {
            getEndpointParameterInstructions() {
                return instructions;
            },
        }, { ...config }, context);
        context.endpointV2 = endpoint;
        context.authSchemes = (_a = endpoint.properties) === null || _a === void 0 ? void 0 : _a.authSchemes;
        const authScheme = (_b = context.authSchemes) === null || _b === void 0 ? void 0 : _b[0];
        if (authScheme) {
            context["signing_region"] = authScheme.signingRegion;
            context["signing_service"] = authScheme.signingName;
        }
        return next({
            ...args,
        });
    };
};
exports.endpointMiddleware = endpointMiddleware;
