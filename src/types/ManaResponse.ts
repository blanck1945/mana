import { HttpMethodsType } from "../constants/HttpMethods";

export type ResponseOptions<Data> = {
  statusCode: number;
  message: string;
  method: HttpMethodsType;
  data?: Data;
  isOk: boolean;
};

export type ManaResponse<Data> = ResponseOptions<Data> & {
  core: string;
};
