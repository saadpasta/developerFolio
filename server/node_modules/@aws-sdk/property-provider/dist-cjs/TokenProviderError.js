"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenProviderError = void 0;
const ProviderError_1 = require("./ProviderError");
class TokenProviderError extends ProviderError_1.ProviderError {
    constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "TokenProviderError";
        Object.setPrototypeOf(this, TokenProviderError.prototype);
    }
}
exports.TokenProviderError = TokenProviderError;
