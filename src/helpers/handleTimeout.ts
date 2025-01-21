import { ManaPreparedRequest } from "../types/ManaRequest";
import { handleResponse } from "./handleResponse";

export const handleTimeOut = (
  controller: AbortController,
  requestOptions: ManaPreparedRequest,
  isTimeoutClean: boolean
) => {
  const timeoutReference = setTimeout(() => {
    controller.abort();
    clearTimeout(timeoutReference);
    isTimeoutClean = true;
    throw handleResponse({
      statusCode: 408,
      message: "TIMEOUT - This operation was aborted",
      method: requestOptions.method,
      isOk: false,
    });
  }, requestOptions.timeout);

  return timeoutReference;
};
