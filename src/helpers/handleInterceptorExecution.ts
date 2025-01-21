import { Mana } from "../types/Mana";
import { ManaRequestInit } from "../types/ManaRequest";
import { ManaRequest } from "../instance/ManaRequest";
import { handleExecution } from "./handleExecution";
import { handleJson } from "./handleJson";

export const handleInterceptorExecution = async <Data>(
  mana: Mana,
  url: string,
  mergeRequestOptions: ManaRequestInit
) => {
  const request = new ManaRequest(url, mergeRequestOptions);

  if (mana.requestInterceptor) {
    await mana.requestInterceptor(request);
  }

  const response = await handleExecution<Data>(request);

  const jsonResponse = await handleJson<Data>(request, response);

  if (mana.responseInterceptor) {
    return await mana.responseInterceptor(jsonResponse);
  }

  return jsonResponse;
};
