import { constructStack } from "@aws-sdk/middleware-stack";
export class Command {
    constructor() {
        this.middlewareStack = constructStack();
    }
}
