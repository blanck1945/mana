import { HttpMethods } from "../constants/HttpMethods";
import { handleInterceptorExecution } from "../helpers/handleInterceptorExecution";
import { ManaRequest } from "../types";
import { CreateInstanceOptions, Mana } from "../types/Mana";
import { ManaRequestInit } from "../types/ManaRequest";
import { ManaResponse } from "../types/ManaResponse";

export const create = (instanceOptions: CreateInstanceOptions) => {
  const req = new Request(instanceOptions.baseUrl, {
    ...(instanceOptions?.headers && { headers: instanceOptions?.headers }),
  });

  const defaultsOptions = {
    timeout: 5000,
    ...req,
  };

  const mana: Mana = {
    getUrl: () => instanceOptions.baseUrl,
    getHeadears: () => instanceOptions.headers,
    getOptions: () => instanceOptions,
    requestInterceptor: null,
    responseInterceptor: null,
    satRequestInterceptor: (cb: (request: ManaRequest) => ManaRequest) => {
      mana.requestInterceptor = cb;
    },
    setResponseInterceptor: <Data>(
      cb: (request: ManaResponse<Data>) => ManaResponse<Data>
    ) => {
      mana.responseInterceptor = cb;
    },
    get: async (url: string, requestOptions?: ManaRequestInit) => {
      return await handleInterceptorExecution(
        mana,
        instanceOptions.baseUrl + url,
        {
          ...defaultsOptions,
          ...requestOptions,
          method: HttpMethods.GET,
        }
      );
    },
    post: async (url: string, requestOptions?: ManaRequestInit) => {
      return await handleInterceptorExecution(
        mana,
        instanceOptions.baseUrl + url,
        {
          ...defaultsOptions,
          ...requestOptions,
          headers: {
            ...defaultsOptions.headers,
            ...requestOptions?.headers,
          },
          method: HttpMethods.POST,
        }
      );
    },
    patch: async (url: string, requestOptions?: ManaRequestInit) => {
      return await handleInterceptorExecution(
        mana,
        instanceOptions.baseUrl + url,
        {
          ...defaultsOptions,
          ...requestOptions,
          method: HttpMethods.PATCH,
        }
      );
    },
    put: async (url: string, requestOptions?: ManaRequestInit) => {
      return await handleInterceptorExecution(
        mana,
        instanceOptions.baseUrl + url,
        {
          ...defaultsOptions,
          ...requestOptions,
          method: HttpMethods.PUT,
        }
      );
    },
    _delete: async (url: string, requestOptions?: ManaRequestInit) => {
      return await handleInterceptorExecution(
        mana,
        instanceOptions.baseUrl + url,
        {
          ...defaultsOptions,
          ...requestOptions,
          method: HttpMethods.DELETE,
        }
      );
    },
  };

  return mana;
};
