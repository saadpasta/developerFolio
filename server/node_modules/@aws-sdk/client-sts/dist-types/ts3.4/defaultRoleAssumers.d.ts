import { Pluggable } from "@aws-sdk/types";
import {
  DefaultCredentialProvider,
  RoleAssumer,
  RoleAssumerWithWebIdentity,
} from "./defaultStsRoleAssumers";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  STSClientConfig,
} from "./STSClient";
export declare const getDefaultRoleAssumer: (
  stsOptions?: Pick<STSClientConfig, "logger" | "region" | "requestHandler">,
  stsPlugins?: Pluggable<ServiceInputTypes, ServiceOutputTypes>[] | undefined
) => RoleAssumer;
export declare const getDefaultRoleAssumerWithWebIdentity: (
  stsOptions?: Pick<STSClientConfig, "logger" | "region" | "requestHandler">,
  stsPlugins?: Pluggable<ServiceInputTypes, ServiceOutputTypes>[] | undefined
) => RoleAssumerWithWebIdentity;
export declare const decorateDefaultCredentialProvider: (
  provider: DefaultCredentialProvider
) => DefaultCredentialProvider;
