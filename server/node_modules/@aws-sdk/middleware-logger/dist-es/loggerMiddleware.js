export const loggerMiddleware = () => (next, context) => async (args) => {
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
            input: (overrideInputFilterSensitiveLog ?? inputFilterSensitiveLog)(args.input),
            output: (overrideOutputFilterSensitiveLog ?? outputFilterSensitiveLog)(outputWithoutMetadata),
            metadata: $metadata,
        });
    }
    return response;
};
export const loggerMiddlewareOptions = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: true,
};
export const getLoggerPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
    },
});
