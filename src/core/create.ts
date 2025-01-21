import { get, post, patch, put, _delete } from ".";
import { HttpMethods } from "../constants/HttpMethods";
import { handleInterceptorExecution } from "../helpers/handleInterceptorExecution";
import { CreateInstanceOptions, Mana } from "../types/Mana";
import { ManaRequestInit } from "../types/ManaRequest";
import { ManaResponse } from "../types/ManaResponse";

export const create = (instanceOptions: CreateInstanceOptions) => {
  const defaultsOptions = {
    timeout: 5000,
    ...instanceOptions,
  };

  const mana: Mana = {
    getUrl: () => instanceOptions.baseUrl,
    getHeadears: () => instanceOptions.headers,
    getOptions: () => instanceOptions,
    requestInterceptor: null,
    responseInterceptor: null,
    satRequestInterceptor: (
      cb: (request: ManaRequestInit) => ManaRequestInit
    ) => {
      mana.requestInterceptor = cb;
    },
    setResponseInterceptor: <Data>(
      cb: (request: ManaResponse<Data>) => ManaResponse<Data>
    ) => {
      mana.responseInterceptor = cb;
    },
    get: async <Data>(url: string, requestOptions?: ManaRequestInit) => {
      return await handleInterceptorExecution(
        mana,
        get,
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
        post,
        instanceOptions.baseUrl + url,
        {
          ...defaultsOptions,
          ...requestOptions,
          method: HttpMethods.POST,
        }
      );
    },
    patch: async (url: string, requestOptions?: ManaRequestInit) => {
      return await handleInterceptorExecution(
        mana,
        patch,
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
        put,
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
        _delete,
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
