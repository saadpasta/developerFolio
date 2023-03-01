export interface Identity {
  readonly expiration?: Date;
}
export interface IdentityProvider<IdentityT extends Identity> {
  (identityProperties?: Record<string, any>): Promise<IdentityT>;
}
