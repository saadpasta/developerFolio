"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localStorage = void 0;
const IndexedDbStorage_1 = require("./IndexedDbStorage");
const InMemoryStorage_1 = require("./InMemoryStorage");
const inMemoryStorage = new InMemoryStorage_1.InMemoryStorage();
function localStorage() {
    if (typeof self === "object" && self.indexedDB) {
        return new IndexedDbStorage_1.IndexedDbStorage();
    }
    if (typeof window === "object" && window.localStorage) {
        return window.localStorage;
    }
    return inMemoryStorage;
}
exports.localStorage = localStorage;
