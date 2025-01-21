import { HttpMethods } from "../constants/HttpMethods";
import { handleExecution } from "../helpers/handleExecution";
import { handleJson } from "../helpers/handleJson";
import { handleRequest } from "../helpers/handleRequest";
import { ManaRequestInit } from "../types/ManaRequest";

export const put = async <Data>(url: string, options: ManaRequestInit) => {
  const [requestOptions, abortController] = handleRequest(
    HttpMethods.PUT,
    options
  );

  const response = await handleExecution<Data>(
    url,
    requestOptions,
    abortController
  );

  return await handleJson<Data>(response, requestOptions);
};
