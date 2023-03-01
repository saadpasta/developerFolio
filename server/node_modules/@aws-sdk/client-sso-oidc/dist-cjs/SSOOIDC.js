"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSOOIDC = void 0;
const CreateTokenCommand_1 = require("./commands/CreateTokenCommand");
const RegisterClientCommand_1 = require("./commands/RegisterClientCommand");
const StartDeviceAuthorizationCommand_1 = require("./commands/StartDeviceAuthorizationCommand");
const SSOOIDCClient_1 = require("./SSOOIDCClient");
class SSOOIDC extends SSOOIDCClient_1.SSOOIDCClient {
    createToken(args, optionsOrCb, cb) {
        const command = new CreateTokenCommand_1.CreateTokenCommand(args);
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
    registerClient(args, optionsOrCb, cb) {
        const command = new RegisterClientCommand_1.RegisterClientCommand(args);
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
    startDeviceAuthorization(args, optionsOrCb, cb) {
        const command = new StartDeviceAuthorizationCommand_1.StartDeviceAuthorizationCommand(args);
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
exports.SSOOIDC = SSOOIDC;
