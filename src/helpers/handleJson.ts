import { ManaPreparedRequest } from "../types/ManaRequest";
import { ManaResponse } from "../types/ManaResponse";
import { handleResponse } from "./handleResponse";

export const handleJson = async <Data>(
  response: Response,
  requestOptions: ManaPreparedRequest
): Promise<ManaResponse<Data>> => {
  try {
    const data = await response.json();

    if (!response.ok) {
      throw handleResponse<Data>({
        statusCode: response.status,
        message: response.statusText,
        method: requestOptions.method,
        isOk: response.ok,
      });
    }

    return handleResponse<Data>({
      statusCode: response.status,
      message: response.statusText,
      method: requestOptions.method,
      isOk: response.ok,
      data,
    });
  } catch (err) {
    throw handleResponse<Data>({
      statusCode: response.status,
      message: response.statusText,
      method: requestOptions.method,
      isOk: response.ok,
    });
  }
};
