export const formatBody = (body: any): FormData | string | null => {
  if (body instanceof FormData) {
    return body;
  } else if (typeof body === "object") {
    return JSON.stringify(body);
  } else {
    return null;
  }
};
