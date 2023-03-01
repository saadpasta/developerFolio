import { CognitoIdentityClientConfig } from "./CognitoIdentityClient";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: CognitoIdentityClientConfig) => {
    runtime: string;
    sha256: import("@aws-sdk/types").HashConstructor;
    requestHandler: (import("@aws-sdk/types").RequestHandler<any, any, import("@aws-sdk/types").HttpHandlerOptions> & import("@aws-sdk/protocol-http").HttpHandler) | import("@aws-sdk/fetch-http-handler").FetchHttpHandler;
    apiVersion: string;
    urlParser: import("@aws-sdk/types").UrlParser;
    bodyLengthChecker: import("@aws-sdk/types").BodyLengthCalculator;
    streamCollector: import("@aws-sdk/types").StreamCollector;
    base64Decoder: import("@aws-sdk/types").Decoder;
    base64Encoder: import("@aws-sdk/types").Encoder;
    utf8Decoder: import("@aws-sdk/types").Decoder;
    utf8Encoder: import("@aws-sdk/types").Encoder;
    disableHostPrefix: boolean;
    serviceId: string;
    useDualstackEndpoint: boolean | import("@aws-sdk/types").Provider<boolean>;
    useFipsEndpoint: boolean | import("@aws-sdk/types").Provider<boolean>;
    region: string | import("@aws-sdk/types").Provider<any>;
    credentialDefaultProvider: (input: any) => import("@aws-sdk/types").Provider<import("@aws-sdk/types").Credentials>;
    defaultUserAgentProvider: import("@aws-sdk/types").Provider<import("@aws-sdk/types").UserAgent>;
    maxAttempts: number | import("@aws-sdk/types").Provider<number>;
    retryMode: string | import("@aws-sdk/types").Provider<string>;
    logger: import("@aws-sdk/types").Logger;
    defaultsMode: import("@aws-sdk/smithy-client").DefaultsMode | import("@aws-sdk/types").Provider<import("@aws-sdk/smithy-client").DefaultsMode>;
    endpoint?: string | import("@aws-sdk/types").Endpoint | import("@aws-sdk/types").Provider<import("@aws-sdk/types").Endpoint> | import("@aws-sdk/types").EndpointV2 | import("@aws-sdk/types").Provider<import("@aws-sdk/types").EndpointV2> | undefined;
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
};
