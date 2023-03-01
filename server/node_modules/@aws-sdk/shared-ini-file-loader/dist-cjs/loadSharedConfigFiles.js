"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadSharedConfigFiles = void 0;
const getConfigFilepath_1 = require("./getConfigFilepath");
const getCredentialsFilepath_1 = require("./getCredentialsFilepath");
const getProfileData_1 = require("./getProfileData");
const parseIni_1 = require("./parseIni");
const slurpFile_1 = require("./slurpFile");
const swallowError = () => ({});
const loadSharedConfigFiles = async (init = {}) => {
    const { filepath = (0, getCredentialsFilepath_1.getCredentialsFilepath)(), configFilepath = (0, getConfigFilepath_1.getConfigFilepath)() } = init;
    const parsedFiles = await Promise.all([
        (0, slurpFile_1.slurpFile)(configFilepath).then(parseIni_1.parseIni).then(getProfileData_1.getProfileData).catch(swallowError),
        (0, slurpFile_1.slurpFile)(filepath).then(parseIni_1.parseIni).catch(swallowError),
    ]);
    return {
        configFile: parsedFiles[0],
        credentialsFile: parsedFiles[1],
    };
};
exports.loadSharedConfigFiles = loadSharedConfigFiles;
