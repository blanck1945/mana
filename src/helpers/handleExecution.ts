import { ManaPreparedRequest } from "../types/ManaRequest";
import { handleResponse } from "./handleResponse";
import { handleTimeOut } from "./handleTimeout";

type CustomError = Error & {
  message: string;
  status: number;
};

export const handleExecution = async <Data>(
  url: string,
  options: ManaPreparedRequest,
  abortController: AbortController
): Promise<Response> => {
  let isTimeoutClean = false;
  const timeoutId = handleTimeOut(abortController, options, isTimeoutClean);
  try {
    return await fetch(url, {
      ...options,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      const customError = err as CustomError;
      throw handleResponse<Data>({
        statusCode: customError.status,
        message: customError.message,
        method: options.method,
        isOk: false,
      });
    } else {
      // Si el error no es de tipo `Error`, maneja el caso adecuadamente
      throw handleResponse<Data>({
        statusCode: 500,
        message: "Unknown Error",
        method: options.method,
        isOk: false,
      });
    }
  } finally {
    if (!isTimeoutClean) {
      clearTimeout(timeoutId);
    }
  }
};
