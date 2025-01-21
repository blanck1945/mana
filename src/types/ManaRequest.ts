export type ManaRequestInit = Omit<RequestInit, "body"> & {
  body?: any;
  timeout?: number;
};

export type ManaPreparedRequest = Request & {
  timeout: number;
  signal: AbortSignal;
};
