import { get, post, patch, put, _delete } from "../core";

export const mapFunctions = {
  get,
  post,
  patch,
  put,
  _delete,
} as const;

export type MapFunctionsType = (typeof mapFunctions)[keyof typeof mapFunctions];
