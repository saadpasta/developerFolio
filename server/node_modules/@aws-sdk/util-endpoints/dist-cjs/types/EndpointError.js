"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndpointError = void 0;
class EndpointError extends Error {
    constructor(message) {
        super(message);
        this.name = "EndpointError";
    }
}
exports.EndpointError = EndpointError;
