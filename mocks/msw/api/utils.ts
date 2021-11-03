import type { DefaultRequestBody, RestRequest } from "msw";

export const getSearchParams = (req: RestRequest<DefaultRequestBody>) => {
  const hoge = req.headers.get("hoge");
  return { hoge };
};
