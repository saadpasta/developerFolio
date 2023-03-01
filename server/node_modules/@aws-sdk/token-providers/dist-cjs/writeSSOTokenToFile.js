"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeSSOTokenToFile = void 0;
const shared_ini_file_loader_1 = require("@aws-sdk/shared-ini-file-loader");
const fs_1 = require("fs");
const { writeFile } = fs_1.promises;
const writeSSOTokenToFile = (id, ssoToken) => {
    const tokenFilepath = (0, shared_ini_file_loader_1.getSSOTokenFilepath)(id);
    const tokenString = JSON.stringify(ssoToken, null, 2);
    return writeFile(tokenFilepath, tokenString);
};
exports.writeSSOTokenToFile = writeSSOTokenToFile;
