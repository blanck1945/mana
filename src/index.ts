import { ManaResponse } from "./index.types";
import { ManaRequestInit } from "./types";
import { get } from "./core/get";
import { post } from "./core/post";
import { patch } from "./core/patch";
import { put } from "./core/put";
import { _delete } from "./core/delete";
import { create } from "./core/create";

export {
  type ManaRequestInit,
  type ManaResponse,
  _delete,
  create,
  get,
  patch,
  post,
  put,
};
