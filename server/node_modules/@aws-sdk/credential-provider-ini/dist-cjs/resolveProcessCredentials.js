"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveProcessCredentials = exports.isProcessProfile = void 0;
const credential_provider_process_1 = require("@aws-sdk/credential-provider-process");
const isProcessProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.credential_process === "string";
exports.isProcessProfile = isProcessProfile;
const resolveProcessCredentials = async (options, profile) => (0, credential_provider_process_1.fromProcess)({
    ...options,
    profile,
})();
exports.resolveProcessCredentials = resolveProcessCredentials;
