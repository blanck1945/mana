import { ManaRequest } from "../instance/ManaRequest";
import { ManaRequestInit } from "./ManaRequest";
import { ManaResponse } from "./ManaResponse";

export type CreateInstanceOptions = {
  baseUrl: string;
  headers?: HeadersInit;
  timeout?: number;
};

type RequestInterceptCallback = (request: ManaRequest) => ManaRequest;

type ResponseInterceptCallback<Data = unknown> = (
  response: ManaResponse<Data>
) => ManaResponse<Data>;

export type Mana = {
  getUrl: () => string;
  getHeadears: () => HeadersInit | undefined;
  getOptions: () => CreateInstanceOptions;
  requestInterceptor: RequestInterceptCallback | null;
  responseInterceptor: ResponseInterceptCallback<any> | null;
  satRequestInterceptor: (cb: (response: ManaRequest) => ManaRequest) => void;
  setResponseInterceptor: <Data>(
    cb: (response: ManaResponse<Data>) => any
  ) => void;
  get: <Data>(
    url: string,
    requestOptions?: ManaRequestInit
  ) => Promise<ManaResponse<Data>>;
  post: <Data>(
    url: string,
    requestOptions?: ManaRequestInit
  ) => Promise<ManaResponse<Data>>;
  patch: <Data>(
    url: string,
    requestOptions?: ManaRequestInit
  ) => Promise<ManaResponse<Data>>;
  put: <Data>(
    url: string,
    requestOptions?: ManaRequestInit
  ) => Promise<ManaResponse<Data>>;
  _delete: <Data>(
    url: string,
    requestOptions?: ManaRequestInit
  ) => Promise<ManaResponse<Data>>;
};
