import { HttpMethods } from "../constants/HttpMethods";
import { handleBody } from "../helpers/handleBody";
import { handleExecution } from "../helpers/handleExecution";
import { handleJson } from "../helpers/handleJson";
import { handleRequest } from "../helpers/handleRequest";
import { ManaRequestInit } from "../types/ManaRequest";

export const patch = async <Data>(url: string, options: ManaRequestInit) => {
  const [requestOptions, abortController] = handleRequest(
    HttpMethods.PATCH,
    options
  );

  const response = await handleExecution<Data>(
    url,
    requestOptions,
    abortController
  );

  return await handleJson<Data>(response, requestOptions);
};
