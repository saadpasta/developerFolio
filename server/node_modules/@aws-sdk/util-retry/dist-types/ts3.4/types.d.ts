export interface RateLimiter {
  getSendToken: () => Promise<void>;
  updateClientSendingRate: (response: any) => void;
}
