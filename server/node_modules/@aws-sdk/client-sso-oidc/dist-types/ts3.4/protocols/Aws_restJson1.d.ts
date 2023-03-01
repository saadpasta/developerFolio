import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
import {
  CreateTokenCommandInput,
  CreateTokenCommandOutput,
} from "../commands/CreateTokenCommand";
import {
  RegisterClientCommandInput,
  RegisterClientCommandOutput,
} from "../commands/RegisterClientCommand";
import {
  StartDeviceAuthorizationCommandInput,
  StartDeviceAuthorizationCommandOutput,
} from "../commands/StartDeviceAuthorizationCommand";
export declare const serializeAws_restJson1CreateTokenCommand: (
  input: CreateTokenCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1RegisterClientCommand: (
  input: RegisterClientCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StartDeviceAuthorizationCommand: (
  input: StartDeviceAuthorizationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1CreateTokenCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateTokenCommandOutput>;
export declare const deserializeAws_restJson1RegisterClientCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RegisterClientCommandOutput>;
export declare const deserializeAws_restJson1StartDeviceAuthorizationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartDeviceAuthorizationCommandOutput>;
