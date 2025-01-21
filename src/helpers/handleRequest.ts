import { ManaPreparedRequest, ManaRequestInit } from "../types/ManaRequest";

export const handleRequest = (
  request: Request,
  options?: ManaRequestInit
): [ManaPreparedRequest, AbortController] => {
  const abortController = new AbortController();

  const requestOptions = {
    ...request,
    signal: abortController.signal,
    timeout: options?.timeout || 5000,
  };

  return [requestOptions, abortController];
};
