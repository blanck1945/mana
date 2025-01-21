export const handleHeaders = (headers: HeadersInit) => {
  return {
    ...(headers && headers),
  };
};
