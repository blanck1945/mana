import { HttpMethods } from "../constants/HttpMethods";
import { handleExecution } from "../helpers/handleExecution";
import { handleJson } from "../helpers/handleJson";
import { handleRequest } from "../helpers/handleRequest";
import { ManaResponse } from "../types/ManaResponse";

export const _delete = async <Data>(
  url: string,
  options: RequestInit = {}
): Promise<ManaResponse<Data>> => {
  const [requestOptions, abortController] = handleRequest(
    HttpMethods.DELETE,
    options
  );

  const response = await handleExecution<Data>(
    url,
    requestOptions,
    abortController
  );

  return await handleJson<Data>(response, requestOptions);
};
