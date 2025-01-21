import { HttpMethodsType } from "../constants/HttpMethods";

export type ResponseOptions<Data> = {
  statusCode: number;
  message: string;
  method: string;
  data?: Data;
  isOk: boolean;
};

export type ManaResponse<Data> = ResponseOptions<Data> & {
  core: string;
};
