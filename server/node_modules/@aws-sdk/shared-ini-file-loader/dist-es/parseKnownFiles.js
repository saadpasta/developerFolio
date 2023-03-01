import { loadSharedConfigFiles } from "./loadSharedConfigFiles";
export const parseKnownFiles = async (init) => {
    const parsedFiles = await loadSharedConfigFiles(init);
    return {
        ...parsedFiles.configFile,
        ...parsedFiles.credentialsFile,
    };
};
