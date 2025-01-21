import { HttpMethods } from "../constants/HttpMethods";
import { handleExecution } from "../helpers/handleExecution";
import { handleJson } from "../helpers/handleJson";
import { handleRequest } from "../helpers/handleRequest";
import { ManaRequest } from "../instance/ManaRequest";
import { ManaRequestInit } from "../types";
import { ManaResponse } from "../types/ManaResponse";

export const _delete = async <Data>(
  url: string,
  options: ManaRequestInit = {}
): Promise<ManaResponse<Data>> => {
  const request = new ManaRequest(url, {
    ...options,
    method: HttpMethods.DELETE,
  });

  const response = await handleExecution<Data>(request);

  return await handleJson<Data>(request, response);
};
