"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListIdentityPools = void 0;
const CognitoIdentity_1 = require("../CognitoIdentity");
const CognitoIdentityClient_1 = require("../CognitoIdentityClient");
const ListIdentityPoolsCommand_1 = require("../commands/ListIdentityPoolsCommand");
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListIdentityPoolsCommand_1.ListIdentityPoolsCommand(input), ...args);
};
const makePagedRequest = async (client, input, ...args) => {
    return await client.listIdentityPools(input, ...args);
};
async function* paginateListIdentityPools(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof CognitoIdentity_1.CognitoIdentity) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CognitoIdentityClient_1.CognitoIdentityClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CognitoIdentity | CognitoIdentityClient");
        }
        yield page;
        const prevToken = token;
        token = page.NextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
exports.paginateListIdentityPools = paginateListIdentityPools;
