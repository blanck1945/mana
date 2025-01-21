import { ManaResponse } from "./index.types";
import { ManaRequestInit } from "./types";
import { ManaRequest } from "./instance/ManaRequest";
import { get } from "./core/get";
import { post } from "./core/post";
import { patch } from "./core/patch";
import { put } from "./core/put";
import { _delete } from "./core/delete";
import { create } from "./core/create";

export {
  type ManaRequestInit,
  type ManaResponse,
  type ManaRequest,
  get,
  post,
  patch,
  put,
  _delete,
  create,
};
