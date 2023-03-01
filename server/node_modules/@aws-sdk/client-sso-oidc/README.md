<!-- generated file, do not edit directly -->

# @aws-sdk/client-sso-oidc

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-sso-oidc/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-sso-oidc)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-sso-oidc.svg)](https://www.npmjs.com/package/@aws-sdk/client-sso-oidc)

## Description

AWS SDK for JavaScript SSOOIDC Client for Node.js, Browser and React Native.

<p>AWS IAM Identity Center (successor to AWS Single Sign-On) OpenID Connect (OIDC) is a web service that enables a client (such as AWS CLI
or a native application) to register with IAM Identity Center. The service also enables the client to
fetch the user’s access token upon successful authentication and authorization with
IAM Identity Center.</p>
<note>
<p>Although AWS Single Sign-On was renamed, the <code>sso</code> and
<code>identitystore</code> API namespaces will continue to retain their original name for
backward compatibility purposes. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed">IAM Identity Center rename</a>.</p>
</note>
<p>
<b>Considerations for Using This Guide</b>
</p>
<p>Before you begin using this guide, we recommend that you first review the following
important information about how the IAM Identity Center OIDC service works.</p>
<ul>
<li>
<p>The IAM Identity Center OIDC service currently implements only the portions of the OAuth 2.0
Device Authorization Grant standard (<a href="https://tools.ietf.org/html/rfc8628">https://tools.ietf.org/html/rfc8628</a>) that are necessary to enable single
sign-on authentication with the AWS CLI. Support for other OIDC flows frequently needed
for native applications, such as Authorization Code Flow (+ PKCE), will be addressed in
future releases.</p>
</li>
<li>
<p>The service emits only OIDC access tokens, such that obtaining a new token (For
example, token refresh) requires explicit user re-authentication.</p>
</li>
<li>
<p>The access tokens provided by this service grant access to all AWS account
entitlements assigned to an IAM Identity Center user, not just a particular application.</p>
</li>
<li>
<p>The documentation in this guide does not describe the mechanism to convert the access
token into AWS Auth (“sigv4”) credentials for use with IAM-protected AWS service
endpoints. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/PortalAPIReference/API_GetRoleCredentials.html">GetRoleCredentials</a> in the <i>IAM Identity Center Portal API Reference
Guide</i>.</p>
</li>
</ul>

<p>For general information about IAM Identity Center, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">What is
IAM Identity Center?</a> in the <i>IAM Identity Center User Guide</i>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-sso-oidc
using your favorite package manager:

- `npm install @aws-sdk/client-sso-oidc`
- `yarn add @aws-sdk/client-sso-oidc`
- `pnpm add @aws-sdk/client-sso-oidc`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SSOOIDCClient` and
the commands you need, for example `CreateTokenCommand`:

```js
// ES5 example
const { SSOOIDCClient, CreateTokenCommand } = require("@aws-sdk/client-sso-oidc");
```

```ts
// ES6+ example
import { SSOOIDCClient, CreateTokenCommand } from "@aws-sdk/client-sso-oidc";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new SSOOIDCClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CreateTokenCommand(params);
```

#### Async/await

We recommend using [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
operator to wait for the promise returned by send operation as follows:

```js
// async/await.
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  // error handling.
} finally {
  // finally.
}
```

Async-await is clean, concise, intuitive, easy to debug and has better error handling
as compared to using Promise chains or callbacks.

#### Promises

You can also use [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining)
to execute send operation.

```js
client.send(command).then(
  (data) => {
    // process data.
  },
  (error) => {
    // error handling.
  }
);
```

Promises can also be called using `.catch()` and `.finally()` as follows:

```js
client
  .send(command)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  })
  .finally(() => {
    // finally.
  });
```

#### Callbacks

We do not recommend using callbacks because of [callback hell](http://callbackhell.com/),
but they are supported by the send operation.

```js
// callbacks.
client.send(command, (err, data) => {
  // process err and data.
});
```

#### v2 compatible style

The client can also send requests using v2 compatible style.
However, it results in a bigger bundle size and may be dropped in next major version. More details in the blog post
on [modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/)

```ts
import * as AWS from "@aws-sdk/client-sso-oidc";
const client = new AWS.SSOOIDC({ region: "REGION" });

// async/await.
try {
  const data = await client.createToken(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createToken(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createToken(params, (err, data) => {
  // process err and data.
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information,
as well as response metadata (e.g. request id).

```js
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  const { requestId, cfId, extendedRequestId } = error.$$metadata;
  console.log({ requestId, cfId, extendedRequestId });
  /**
   * The keys within exceptions are also parsed.
   * You can access them by specifying exception names:
   * if (error.name === 'SomeServiceException') {
   *     const value = error.specialKeyInException;
   * }
   */
}
```

## Getting Help

Please use these community resources for getting help.
We use the GitHub issues for tracking bugs and feature requests, but have limited bandwidth to address them.

- Visit [Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
  or [API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html).
- Check out the blog posts tagged with [`aws-sdk-js`](https://aws.amazon.com/blogs/developer/tag/aws-sdk-js/)
  on AWS Developer Blog.
- Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) and tag it with `aws-sdk-js`.
- Join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3).
- If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues/new/choose).

To test your universal JavaScript code in Node.js, browser and react-native environments,
visit our [code samples repo](https://github.com/aws-samples/aws-sdk-js-tests).

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-sso-oidc` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
