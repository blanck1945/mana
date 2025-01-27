import { HttpMethods } from "../constants/HttpMethods";
import { handleExecution } from "../helpers/handleExecution";
import { handleJson } from "../helpers/handleJson";
import { ManaRequest } from "../instance/ManaRequest";
import { ManaRequestInit } from "../types/ManaRequest";
import { formatBody } from "../utils/formatBody";

export const put = async <Data>(url: string, options: ManaRequestInit) => {
  const request = new ManaRequest(url, {
    ...options,
    body: formatBody(options.body),
    method: HttpMethods.PUT,
  });

  const response = await handleExecution<Data>(request);

  return await handleJson<Data>(request, response);
};
