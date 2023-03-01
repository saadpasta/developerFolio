# @aws-sdk/token-providers

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/token-providers/latest.svg)](https://www.npmjs.com/package/@aws-sdk/token-providers)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/token-providers.svg)](https://www.npmjs.com/package/@aws-sdk/token-providers)

A collection of all token providers. The token providers should be used when the authorization
type is going to be token based. For example, the `bearer` authorization type set using
[httpBearerAuth trait][http-bearer-auth-trait] in Smithy.

## Static Token Provider

```ts
import { fromStatic } from "@aws-sdk/token-providers"

const token = { token: "TOKEN" };
const staticTokenProvider = fromStatic(token);

cont staticToken = await staticTokenProvider(); // returns { token: "TOKEN" }
```

## SSO Token Provider

```ts
import { fromSso } from "@aws-sdk/token-providers"

// returns token from SSO token cache or ssoOidc.createToken() call.
cont ssoToken = await fromSso();
```

## Token Provider Chain

```ts
import { nodeProvider } from "@aws-sdk/token-providers"

// returns token from default providers.
cont token = await nodeProvider();
```

[http-bearer-auth-trait]: https://smithy.io/2.0/spec/authentication-traits.html#smithy-api-httpbearerauth-trait
