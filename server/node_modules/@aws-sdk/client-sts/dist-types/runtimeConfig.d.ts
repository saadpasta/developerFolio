import { NodeHttpHandler as RequestHandler } from "@aws-sdk/node-http-handler";
import { STSClientConfig } from "./STSClient";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: STSClientConfig) => {
    runtime: string;
    defaultsMode: import("@aws-sdk/types").Provider<import("@aws-sdk/smithy-client").ResolvedDefaultsMode>;
    bodyLengthChecker: import("@aws-sdk/types").BodyLengthCalculator;
    credentialDefaultProvider: import("./defaultStsRoleAssumers").DefaultCredentialProvider;
    defaultUserAgentProvider: import("@aws-sdk/types").Provider<import("@aws-sdk/types").UserAgent>;
    maxAttempts: number | import("@aws-sdk/types").Provider<number>;
    region: string | import("@aws-sdk/types").Provider<string>;
    requestHandler: (import("@aws-sdk/types").RequestHandler<any, any, import("@aws-sdk/types").HttpHandlerOptions> & import("@aws-sdk/protocol-http").HttpHandler) | RequestHandler;
    retryMode: string | import("@aws-sdk/types").Provider<string>;
    sha256: import("@aws-sdk/types").HashConstructor;
    streamCollector: import("@aws-sdk/types").StreamCollector;
    useDualstackEndpoint: boolean | import("@aws-sdk/types").Provider<boolean>;
    useFipsEndpoint: boolean | import("@aws-sdk/types").Provider<boolean>;
    apiVersion: string;
    urlParser: import("@aws-sdk/types").UrlParser;
    base64Decoder: import("@aws-sdk/types").Decoder;
    base64Encoder: import("@aws-sdk/types").Encoder;
    utf8Decoder: import("@aws-sdk/types").Decoder;
    utf8Encoder: import("@aws-sdk/types").Encoder;
    disableHostPrefix: boolean;
    serviceId: string;
    logger: import("@aws-sdk/types").Logger;
    endpoint?: ((string | import("@aws-sdk/types").Endpoint | import("@aws-sdk/types").Provider<import("@aws-sdk/types").Endpoint> | import("@aws-sdk/types").EndpointV2 | import("@aws-sdk/types").Provider<import("@aws-sdk/types").EndpointV2>) & (string | import("@aws-sdk/types").Provider<string> | import("@aws-sdk/types").Endpoint | import("@aws-sdk/types").Provider<import("@aws-sdk/types").Endpoint> | import("@aws-sdk/types").EndpointV2 | import("@aws-sdk/types").Provider<import("@aws-sdk/types").EndpointV2>)) | undefined;
    endpointProvider: (endpointParams: import("./endpoint/EndpointParameters").EndpointParameters, context?: {
        logger?: import("@aws-sdk/types").Logger | undefined;
    }) => import("@aws-sdk/types").EndpointV2;
    tls?: boolean | undefined;
    retryStrategy?: import("@aws-sdk/types").RetryStrategy | import("@aws-sdk/types").RetryStrategyV2 | undefined;
    credentials?: import("@aws-sdk/types").AwsCredentialIdentity | import("@aws-sdk/types").Provider<import("@aws-sdk/types").AwsCredentialIdentity> | undefined;
    signer?: import("@aws-sdk/types").RequestSigner | ((authScheme?: import("@aws-sdk/types").AuthScheme | undefined) => Promise<import("@aws-sdk/types").RequestSigner>) | undefined;
    signingEscapePath?: boolean | undefined;
    systemClockOffset?: number | undefined;
    signingRegion?: string | undefined;
    signerConstructor?: (new (options: import("@aws-sdk/signature-v4").SignatureV4Init & import("@aws-sdk/signature-v4").SignatureV4CryptoInit) => import("@aws-sdk/types").RequestSigner) | undefined;
    customUserAgent?: string | import("@aws-sdk/types").UserAgent | undefined;
    useGlobalEndpoint?: boolean | import("@aws-sdk/types").Provider<boolean> | undefined;
};
