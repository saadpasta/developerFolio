import { SourceData } from "./crypto";
export interface Checksum {
  digestLength?: number;
  copy?(): Checksum;
  digest(): Promise<Uint8Array>;
  mark?(readLimit: number): void;
  reset(): void;
  update(chunk: Uint8Array): void;
}
export interface ChecksumConstructor {
  new (secret?: SourceData): Checksum;
}
