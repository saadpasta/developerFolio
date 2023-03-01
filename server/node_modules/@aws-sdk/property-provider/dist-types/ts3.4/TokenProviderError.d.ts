import { ProviderError } from "./ProviderError";
export declare class TokenProviderError extends ProviderError {
  readonly tryNextLink: boolean;
  name: string;
  constructor(message: string, tryNextLink?: boolean);
}
