"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfigFilepath = exports.ENV_CONFIG_PATH = void 0;
const path_1 = require("path");
const getHomeDir_1 = require("./getHomeDir");
exports.ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
const getConfigFilepath = () => process.env[exports.ENV_CONFIG_PATH] || (0, path_1.join)((0, getHomeDir_1.getHomeDir)(), ".aws", "config");
exports.getConfigFilepath = getConfigFilepath;
