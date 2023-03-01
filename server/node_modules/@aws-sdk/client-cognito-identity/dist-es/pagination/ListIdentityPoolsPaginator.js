import { CognitoIdentity } from "../CognitoIdentity";
import { CognitoIdentityClient } from "../CognitoIdentityClient";
import { ListIdentityPoolsCommand, } from "../commands/ListIdentityPoolsCommand";
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListIdentityPoolsCommand(input), ...args);
};
const makePagedRequest = async (client, input, ...args) => {
    return await client.listIdentityPools(input, ...args);
};
export async function* paginateListIdentityPools(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof CognitoIdentity) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CognitoIdentityClient) {
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
