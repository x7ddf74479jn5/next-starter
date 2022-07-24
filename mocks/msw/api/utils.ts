import type { DefaultBodyType, RestRequest } from "msw";

const PORT = "8080";
export const API_ROUTE = `https://localhost:${PORT}/api`;

export const getSearchParams = (req: RestRequest<DefaultBodyType>) => {
  const hoge = req.headers.get("hoge");
  return { hoge };
};
