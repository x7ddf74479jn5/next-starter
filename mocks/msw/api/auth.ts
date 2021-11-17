import type { ResponseResolver, RestContext, RestRequest } from "msw";
import { rest } from "msw";

const mockLogin: ResponseResolver<RestRequest, RestContext> = async (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      name: "user",
    })
  );
};

const mockLogout: ResponseResolver<RestRequest, RestContext> = (req, res, ctx) => {
  return res(ctx.status(200), ctx.json("logout"));
};

const API = "https://localhost:3000/api";

export const mockAuthHandlers = [rest.post(`${API}/login`, mockLogin), rest.post(`${API}/logout`, mockLogout)];
