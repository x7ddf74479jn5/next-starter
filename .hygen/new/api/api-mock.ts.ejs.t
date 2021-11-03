---
to: "<%= have_mock ? `${mock_path}/index.ts` : null %>" 
---
import type { ResponseResolver, RestContext, RestRequest } from "msw";

export const mock<%= api_name %>: ResponseResolver<RestRequest, RestContext> = async (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({

    })
  );
};


