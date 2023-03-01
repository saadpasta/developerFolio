"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uriEncode = void 0;
const uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
exports.uriEncode = uriEncode;
