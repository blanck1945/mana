import { HttpMethods } from "../constants/HttpMethods";
import { handleExecution } from "../helpers/handleExecution";
import { handleJson } from "../helpers/handleJson";
import { handleRequest } from "../helpers/handleRequest";
import { ManaRequestInit } from "../types/ManaRequest";
import { ManaResponse } from "../types/ManaResponse";

export const get = async <Data>(
  url: string,
  options?: ManaRequestInit
): Promise<ManaResponse<Data>> => {
  const [requestOptions, abortController] = handleRequest(
    HttpMethods.GET,
    options
  );

  const response = await handleExecution<Data>(
    url,
    requestOptions,
    abortController
  );

  return await handleJson<Data>(response, requestOptions);
};
