"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultDelayDecider = void 0;
const util_retry_1 = require("@aws-sdk/util-retry");
const defaultDelayDecider = (delayBase, attempts) => Math.floor(Math.min(util_retry_1.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
exports.defaultDelayDecider = defaultDelayDecider;
