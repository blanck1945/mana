import { HttpMethods } from "../constants/HttpMethods";
import { handleExecution } from "../helpers/handleExecution";
import { handleJson } from "../helpers/handleJson";
import { ManaRequest } from "../instance/ManaRequest";
import { ManaRequestInit } from "../types/ManaRequest";
import { formatBody } from "../utils/formatBody";

export const post = async <Data>(url: string, options: ManaRequestInit) => {
  console.log(options.body);

  const req = new ManaRequest(url, {
    ...options,
    body: formatBody(options.body),
    method: HttpMethods.POST,
  });

  const response = await handleExecution<Data>(req);

  return await handleJson<Data>(req, response);
};
