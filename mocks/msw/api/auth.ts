import type { ResponseResolver, RestContext, RestRequest } from "msw";

export const mockLogin: ResponseResolver<RestRequest, RestContext> = async (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      name: "user",
    })
  );
};

export const mockLogout: ResponseResolver<RestRequest, RestContext> = (req, res, ctx) => {
  return res(ctx.status(200), ctx.json("logout"));
};
