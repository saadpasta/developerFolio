import {
  EndpointBearer,
  RequestSerializer,
  SerializeMiddleware,
} from "@aws-sdk/types";
import { V1OrV2Endpoint } from "./serdePlugin";
export declare const serializerMiddleware: <
  Input extends object,
  Output extends object,
  RuntimeUtils extends EndpointBearer
>(
  options: V1OrV2Endpoint,
  serializer: RequestSerializer<any, RuntimeUtils>
) => SerializeMiddleware<Input, Output>;
