"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLoggerPlugin = exports.loggerMiddlewareOptions = exports.loggerMiddleware = void 0;
const loggerMiddleware = () => (next, context) => async (args) => {
    const response = await next(args);
    const { clientName, commandName, logger, inputFilterSensitiveLog, outputFilterSensitiveLog, dynamoDbDocumentClientOptions = {}, } = context;
    const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
    if (!logger) {
        return response;
    }
    if (typeof logger.info === "function") {
        const { $metadata, ...outputWithoutMetadata } = response.output;
        logger.info({
            clientName,
            commandName,
            input: (overrideInputFilterSensitiveLog !== null && overrideInputFilterSensitiveLog !== void 0 ? overrideInputFilterSensitiveLog : inputFilterSensitiveLog)(args.input),
            output: (overrideOutputFilterSensitiveLog !== null && overrideOutputFilterSensitiveLog !== void 0 ? overrideOutputFilterSensitiveLog : outputFilterSensitiveLog)(outputWithoutMetadata),
            metadata: $metadata,
        });
    }
    return response;
};
exports.loggerMiddleware = loggerMiddleware;
exports.loggerMiddlewareOptions = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: true,
};
const getLoggerPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add((0, exports.loggerMiddleware)(), exports.loggerMiddlewareOptions);
    },
});
exports.getLoggerPlugin = getLoggerPlugin;
