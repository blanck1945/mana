export const handleBody = (body: any) => {
  return body instanceof FormData ? body : JSON.stringify(body);
};
