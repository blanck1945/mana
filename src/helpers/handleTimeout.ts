import { ManaRequest } from "../instance/ManaRequest";
import { handleResponse } from "./handleResponse";

export const handleTimeOut = (request: ManaRequest) => {
  const timeoutReference = setTimeout(() => {
    request.abort();
    clearTimeout(timeoutReference);
    request.toggleIsTimeoutClean();
    throw handleResponse({
      statusCode: 408,
      message: "TIMEOUT - This operation was aborted",
      method: "GET",
      isOk: false,
    });
  }, request.getTimeout());

  return timeoutReference;
};
