import { MapFunctionsType } from "../constants/MapFunctions";
import { Mana } from "../types/Mana";
import { ManaRequestInit } from "../types/ManaRequest";

export const handleInterceptorExecution = async <Data>(
  mana: Mana,
  cb: MapFunctionsType,
  url: string,
  mergeRequestOptions: ManaRequestInit
) => {
  let interceptRequest = mergeRequestOptions;

  if (mana.requestInterceptor) {
    interceptRequest = await mana.requestInterceptor(mergeRequestOptions);
  }

  const response = await cb<Data>(url, interceptRequest);

  if (mana.responseInterceptor) {
    return await mana.responseInterceptor(response);
  }

  return response;
};
