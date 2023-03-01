"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CognitoIdentity = void 0;
const CognitoIdentityClient_1 = require("./CognitoIdentityClient");
const CreateIdentityPoolCommand_1 = require("./commands/CreateIdentityPoolCommand");
const DeleteIdentitiesCommand_1 = require("./commands/DeleteIdentitiesCommand");
const DeleteIdentityPoolCommand_1 = require("./commands/DeleteIdentityPoolCommand");
const DescribeIdentityCommand_1 = require("./commands/DescribeIdentityCommand");
const DescribeIdentityPoolCommand_1 = require("./commands/DescribeIdentityPoolCommand");
const GetCredentialsForIdentityCommand_1 = require("./commands/GetCredentialsForIdentityCommand");
const GetIdCommand_1 = require("./commands/GetIdCommand");
const GetIdentityPoolRolesCommand_1 = require("./commands/GetIdentityPoolRolesCommand");
const GetOpenIdTokenCommand_1 = require("./commands/GetOpenIdTokenCommand");
const GetOpenIdTokenForDeveloperIdentityCommand_1 = require("./commands/GetOpenIdTokenForDeveloperIdentityCommand");
const GetPrincipalTagAttributeMapCommand_1 = require("./commands/GetPrincipalTagAttributeMapCommand");
const ListIdentitiesCommand_1 = require("./commands/ListIdentitiesCommand");
const ListIdentityPoolsCommand_1 = require("./commands/ListIdentityPoolsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const LookupDeveloperIdentityCommand_1 = require("./commands/LookupDeveloperIdentityCommand");
const MergeDeveloperIdentitiesCommand_1 = require("./commands/MergeDeveloperIdentitiesCommand");
const SetIdentityPoolRolesCommand_1 = require("./commands/SetIdentityPoolRolesCommand");
const SetPrincipalTagAttributeMapCommand_1 = require("./commands/SetPrincipalTagAttributeMapCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UnlinkDeveloperIdentityCommand_1 = require("./commands/UnlinkDeveloperIdentityCommand");
const UnlinkIdentityCommand_1 = require("./commands/UnlinkIdentityCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateIdentityPoolCommand_1 = require("./commands/UpdateIdentityPoolCommand");
class CognitoIdentity extends CognitoIdentityClient_1.CognitoIdentityClient {
    createIdentityPool(args, optionsOrCb, cb) {
        const command = new CreateIdentityPoolCommand_1.CreateIdentityPoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteIdentities(args, optionsOrCb, cb) {
        const command = new DeleteIdentitiesCommand_1.DeleteIdentitiesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteIdentityPool(args, optionsOrCb, cb) {
        const command = new DeleteIdentityPoolCommand_1.DeleteIdentityPoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeIdentity(args, optionsOrCb, cb) {
        const command = new DescribeIdentityCommand_1.DescribeIdentityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeIdentityPool(args, optionsOrCb, cb) {
        const command = new DescribeIdentityPoolCommand_1.DescribeIdentityPoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getCredentialsForIdentity(args, optionsOrCb, cb) {
        const command = new GetCredentialsForIdentityCommand_1.GetCredentialsForIdentityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getId(args, optionsOrCb, cb) {
        const command = new GetIdCommand_1.GetIdCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getIdentityPoolRoles(args, optionsOrCb, cb) {
        const command = new GetIdentityPoolRolesCommand_1.GetIdentityPoolRolesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getOpenIdToken(args, optionsOrCb, cb) {
        const command = new GetOpenIdTokenCommand_1.GetOpenIdTokenCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getOpenIdTokenForDeveloperIdentity(args, optionsOrCb, cb) {
        const command = new GetOpenIdTokenForDeveloperIdentityCommand_1.GetOpenIdTokenForDeveloperIdentityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getPrincipalTagAttributeMap(args, optionsOrCb, cb) {
        const command = new GetPrincipalTagAttributeMapCommand_1.GetPrincipalTagAttributeMapCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listIdentities(args, optionsOrCb, cb) {
        const command = new ListIdentitiesCommand_1.ListIdentitiesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listIdentityPools(args, optionsOrCb, cb) {
        const command = new ListIdentityPoolsCommand_1.ListIdentityPoolsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    lookupDeveloperIdentity(args, optionsOrCb, cb) {
        const command = new LookupDeveloperIdentityCommand_1.LookupDeveloperIdentityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    mergeDeveloperIdentities(args, optionsOrCb, cb) {
        const command = new MergeDeveloperIdentitiesCommand_1.MergeDeveloperIdentitiesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setIdentityPoolRoles(args, optionsOrCb, cb) {
        const command = new SetIdentityPoolRolesCommand_1.SetIdentityPoolRolesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setPrincipalTagAttributeMap(args, optionsOrCb, cb) {
        const command = new SetPrincipalTagAttributeMapCommand_1.SetPrincipalTagAttributeMapCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    unlinkDeveloperIdentity(args, optionsOrCb, cb) {
        const command = new UnlinkDeveloperIdentityCommand_1.UnlinkDeveloperIdentityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    unlinkIdentity(args, optionsOrCb, cb) {
        const command = new UnlinkIdentityCommand_1.UnlinkIdentityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateIdentityPool(args, optionsOrCb, cb) {
        const command = new UpdateIdentityPoolCommand_1.UpdateIdentityPoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.CognitoIdentity = CognitoIdentity;
