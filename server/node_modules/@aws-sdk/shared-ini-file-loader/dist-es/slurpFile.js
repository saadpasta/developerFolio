import { promises as fsPromises } from "fs";
const { readFile } = fsPromises;
const filePromisesHash = {};
export const slurpFile = (path) => {
    if (!filePromisesHash[path]) {
        filePromisesHash[path] = readFile(path, "utf8");
    }
    return filePromisesHash[path];
};
