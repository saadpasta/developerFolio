"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseIni = void 0;
const profileNameBlockList = ["__proto__", "profile __proto__"];
const parseIni = (iniData) => {
    const map = {};
    let currentSection;
    for (let line of iniData.split(/\r?\n/)) {
        line = line.split(/(^|\s)[;#]/)[0].trim();
        const isSection = line[0] === "[" && line[line.length - 1] === "]";
        if (isSection) {
            currentSection = line.substring(1, line.length - 1);
            if (profileNameBlockList.includes(currentSection)) {
                throw new Error(`Found invalid profile name "${currentSection}"`);
            }
        }
        else if (currentSection) {
            const indexOfEqualsSign = line.indexOf("=");
            const start = 0;
            const end = line.length - 1;
            const isAssignment = indexOfEqualsSign !== -1 && indexOfEqualsSign !== start && indexOfEqualsSign !== end;
            if (isAssignment) {
                const [name, value] = [
                    line.substring(0, indexOfEqualsSign).trim(),
                    line.substring(indexOfEqualsSign + 1).trim(),
                ];
                map[currentSection] = map[currentSection] || {};
                map[currentSection][name] = value;
            }
        }
    }
    return map;
};
exports.parseIni = parseIni;
