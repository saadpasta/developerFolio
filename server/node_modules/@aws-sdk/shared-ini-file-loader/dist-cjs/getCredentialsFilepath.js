"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCredentialsFilepath = exports.ENV_CREDENTIALS_PATH = void 0;
const path_1 = require("path");
const getHomeDir_1 = require("./getHomeDir");
exports.ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
const getCredentialsFilepath = () => process.env[exports.ENV_CREDENTIALS_PATH] || (0, path_1.join)((0, getHomeDir_1.getHomeDir)(), ".aws", "credentials");
exports.getCredentialsFilepath = getCredentialsFilepath;
