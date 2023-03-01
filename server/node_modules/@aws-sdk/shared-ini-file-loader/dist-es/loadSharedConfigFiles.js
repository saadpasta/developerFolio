import { getConfigFilepath } from "./getConfigFilepath";
import { getCredentialsFilepath } from "./getCredentialsFilepath";
import { getProfileData } from "./getProfileData";
import { parseIni } from "./parseIni";
import { slurpFile } from "./slurpFile";
const swallowError = () => ({});
export const loadSharedConfigFiles = async (init = {}) => {
    const { filepath = getCredentialsFilepath(), configFilepath = getConfigFilepath() } = init;
    const parsedFiles = await Promise.all([
        slurpFile(configFilepath).then(parseIni).then(getProfileData).catch(swallowError),
        slurpFile(filepath).then(parseIni).catch(swallowError),
    ]);
    return {
        configFile: parsedFiles[0],
        credentialsFile: parsedFiles[1],
    };
};
