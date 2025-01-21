import { HttpMethodsType } from "../constants/HttpMethods";
import { ManaPreparedRequest, ManaRequestInit } from "../types/ManaRequest";
import { handleBody } from "./handleBody";
import { handleHeaders } from "./handleHeaders";

export const handleRequest = (
  method: HttpMethodsType,
  options: ManaRequestInit | undefined
): [ManaPreparedRequest, AbortController] => {
  const abortController = new AbortController();

  const requestOptions = {
    ...options,
    signal: abortController.signal,
    ...(options?.headers && {
      headers: handleHeaders(options.headers),
    }),
    method,
    timeout: options?.timeout || 5000,
    ...(options?.body && { body: handleBody(options.body) }),
  };

  return [requestOptions, abortController];
};
