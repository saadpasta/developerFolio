"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEndpointProperty = void 0;
const types_1 = require("../types");
const evaluateTemplate_1 = require("./evaluateTemplate");
const getEndpointProperties_1 = require("./getEndpointProperties");
const getEndpointProperty = (property, options) => {
    if (Array.isArray(property)) {
        return property.map((propertyEntry) => (0, exports.getEndpointProperty)(propertyEntry, options));
    }
    switch (typeof property) {
        case "string":
            return (0, evaluateTemplate_1.evaluateTemplate)(property, options);
        case "object":
            if (property === null) {
                throw new types_1.EndpointError(`Unexpected endpoint property: ${property}`);
            }
            return (0, getEndpointProperties_1.getEndpointProperties)(property, options);
        case "boolean":
            return property;
        default:
            throw new types_1.EndpointError(`Unexpected endpoint property type: ${typeof property}`);
    }
};
exports.getEndpointProperty = getEndpointProperty;
