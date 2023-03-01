export declare type LogLevel =
  | "all"
  | "trace"
  | "debug"
  | "log"
  | "info"
  | "warn"
  | "error"
  | "off";
export interface LoggerOptions {
  logger?: Logger;
  logLevel?: LogLevel;
}
export interface Logger {
  trace?: (...content: any[]) => void;
  debug: (...content: any[]) => void;
  info: (...content: any[]) => void;
  warn: (...content: any[]) => void;
  error: (...content: any[]) => void;
}
