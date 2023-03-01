"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partition = void 0;
const tslib_1 = require("tslib");
const partitions_json_1 = tslib_1.__importDefault(require("./partitions.json"));
const { partitions } = partitions_json_1.default;
const DEFAULT_PARTITION = partitions.find((partition) => partition.id === "aws");
const partition = (value) => {
    for (const partition of partitions) {
        const { regions, outputs } = partition;
        for (const [region, regionData] of Object.entries(regions)) {
            if (region === value) {
                return {
                    ...outputs,
                    ...regionData,
                };
            }
        }
    }
    for (const partition of partitions) {
        const { regionRegex, outputs } = partition;
        if (new RegExp(regionRegex).test(value)) {
            return {
                ...outputs,
            };
        }
    }
    if (!DEFAULT_PARTITION) {
        throw new Error("Provided region was not found in the partition array or regex," +
            " and default partition with id 'aws' doesn't exist.");
    }
    return {
        ...DEFAULT_PARTITION.outputs,
    };
};
exports.partition = partition;
