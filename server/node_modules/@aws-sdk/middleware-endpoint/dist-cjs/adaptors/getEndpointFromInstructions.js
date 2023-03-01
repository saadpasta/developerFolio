"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveParams = exports.getEndpointFromInstructions = void 0;
const service_customizations_1 = require("../service-customizations");
const createConfigValueProvider_1 = require("./createConfigValueProvider");
const getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context) => {
    const endpointParams = await (0, exports.resolveParams)(commandInput, instructionsSupplier, clientConfig);
    if (typeof clientConfig.endpointProvider !== "function") {
        throw new Error("config.endpointProvider is not set.");
    }
    const endpoint = clientConfig.endpointProvider(endpointParams, context);
    return endpoint;
};
exports.getEndpointFromInstructions = getEndpointFromInstructions;
const resolveParams = async (commandInput, instructionsSupplier, clientConfig) => {
    var _a;
    const endpointParams = {};
    const instructions = ((_a = instructionsSupplier === null || instructionsSupplier === void 0 ? void 0 : instructionsSupplier.getEndpointParameterInstructions) === null || _a === void 0 ? void 0 : _a.call(instructionsSupplier)) || {};
    for (const [name, instruction] of Object.entries(instructions)) {
        switch (instruction.type) {
            case "staticContextParams":
                endpointParams[name] = instruction.value;
                break;
            case "contextParams":
                endpointParams[name] = commandInput[instruction.name];
                break;
            case "clientContextParams":
            case "builtInParams":
                endpointParams[name] = await (0, createConfigValueProvider_1.createConfigValueProvider)(instruction.name, name, clientConfig)();
                break;
            default:
                throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
        }
    }
    if (Object.keys(instructions).length === 0) {
        Object.assign(endpointParams, clientConfig);
    }
    if (String(clientConfig.serviceId).toLowerCase() === "s3") {
        await (0, service_customizations_1.resolveParamsForS3)(endpointParams);
    }
    return endpointParams;
};
exports.resolveParams = resolveParams;
