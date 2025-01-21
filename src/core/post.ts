import { HttpMethods } from "../constants/HttpMethods";
import { handleExecution } from "../helpers/handleExecution";
import { handleJson } from "../helpers/handleJson";
import { handleRequest } from "../helpers/handleRequest";
import { ManaRequest } from "../instance/ManaRequest";
import { ManaRequestInit } from "../types/ManaRequest";

export const post = async <Data>(url: string, options: ManaRequestInit) => {
  const request = new ManaRequest(url, {
    ...options,
    method: HttpMethods.POST,
  });

  const response = await handleExecution<Data>(request);

  return await handleJson<Data>(request, response);
};
