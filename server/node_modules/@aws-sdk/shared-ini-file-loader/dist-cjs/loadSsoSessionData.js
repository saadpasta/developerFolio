"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadSsoSessionData = void 0;
const getConfigFilepath_1 = require("./getConfigFilepath");
const getSsoSessionData_1 = require("./getSsoSessionData");
const parseIni_1 = require("./parseIni");
const slurpFile_1 = require("./slurpFile");
const swallowError = () => ({});
const loadSsoSessionData = async (init = {}) => {
    var _a;
    return (0, slurpFile_1.slurpFile)((_a = init.configFilepath) !== null && _a !== void 0 ? _a : (0, getConfigFilepath_1.getConfigFilepath)())
        .then(parseIni_1.parseIni)
        .then(getSsoSessionData_1.getSsoSessionData)
        .catch(swallowError);
};
exports.loadSsoSessionData = loadSsoSessionData;
