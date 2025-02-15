import { ManaRequest } from "../instance/ManaRequest";
import { ManaResponse } from "../types/ManaResponse";
import { handleResponse } from "./handleResponse";

export const handleJson = async <Data>(
  request: ManaRequest,
  response: Response
): Promise<ManaResponse<Data>> => {
  try {
    const jsonData = await response.json();

    if (!response.ok) {
      throw handleResponse<Data>({
        statusCode: response.status,
        message: response.statusText,
        method: request.method,
        isOk: response.ok,
      });
    }

    return handleResponse<Data>({
      statusCode: response.status,
      message: response.statusText,
      method: request.method,
      isOk: response.ok,
      data: jsonData.data,
    });
  } catch (err) {
    throw handleResponse<Data>({
      statusCode: response.status,
      message: response.statusText,
      method: request.method,
      isOk: response.ok,
    });
  }
};
