"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEndpointProperties = void 0;
const getEndpointProperty_1 = require("./getEndpointProperty");
const getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
    ...acc,
    [propertyKey]: (0, getEndpointProperty_1.getEndpointProperty)(propertyVal, options),
}), {});
exports.getEndpointProperties = getEndpointProperties;
