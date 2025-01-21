import { ManaResponse, ResponseOptions } from "../types/ManaResponse";

export const handleResponse = <Data>({
  statusCode,
  message,
  isOk,
  method,
  data,
}: ResponseOptions<Data>): ManaResponse<Data> => {
  return {
    message,
    statusCode,
    isOk,
    data,
    method,
    core: "mana",
  };
};
