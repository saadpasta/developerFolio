import { ListAccountRolesCommand, } from "../commands/ListAccountRolesCommand";
import { SSO } from "../SSO";
import { SSOClient } from "../SSOClient";
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListAccountRolesCommand(input), ...args);
};
const makePagedRequest = async (client, input, ...args) => {
    return await client.listAccountRoles(input, ...args);
};
export async function* paginateListAccountRoles(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof SSO) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SSOClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SSO | SSOClient");
        }
        yield page;
        const prevToken = token;
        token = page.nextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
