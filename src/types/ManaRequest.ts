import { HttpMethodsType } from "../constants/HttpMethods";

export type ManaRequestInit = Omit<RequestInit, "body"> & {
  body?: any;
  timeout?: number;
};

export type ManaPreparedRequest = Omit<ManaRequestInit, "method"> & {
  timeout: number;
  method: HttpMethodsType;
};
