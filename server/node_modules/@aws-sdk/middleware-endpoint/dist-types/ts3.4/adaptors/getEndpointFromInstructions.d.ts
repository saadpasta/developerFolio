import {
  EndpointParameters,
  EndpointV2,
  HandlerExecutionContext,
} from "@aws-sdk/types";
import { EndpointResolvedConfig } from "../resolveEndpointConfig";
import { EndpointParameterInstructions } from "../types";
export declare type EndpointParameterInstructionsSupplier = Partial<{
  getEndpointParameterInstructions(): EndpointParameterInstructions;
}>;
export declare const getEndpointFromInstructions: <
  T extends EndpointParameters,
  CommandInput extends Record<string, unknown>,
  Config extends Record<string, unknown>
>(
  commandInput: CommandInput,
  instructionsSupplier: EndpointParameterInstructionsSupplier,
  clientConfig: Partial<EndpointResolvedConfig<T>> & Config,
  context?: HandlerExecutionContext | undefined
) => Promise<EndpointV2>;
export declare const resolveParams: <
  T extends EndpointParameters,
  CommandInput extends Record<string, unknown>,
  Config extends Record<string, unknown>
>(
  commandInput: CommandInput,
  instructionsSupplier: EndpointParameterInstructionsSupplier,
  clientConfig: Partial<EndpointResolvedConfig<T>> & Config
) => Promise<EndpointParameters>;
