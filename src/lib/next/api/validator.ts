import type { z, ZodRawShape } from "zod";

import { RequestBodyError, RequestQueryError } from "./error";

export const validateQuery = <T extends ZodRawShape, Q extends Record<string, unknown>>(
  querySchema: z.ZodObject<T>,
  query: Q
) => {
  const result = querySchema.safeParse(query);

  if (!result.success) {
    const {
      error: { stack },
    } = result;

    throw new RequestQueryError({
      status: 400,
      message: "InvalidQueryError",
      stack,
    });
  }

  return result.data;
};

export const validateBody = <T extends ZodRawShape, Q extends Record<string, unknown>>(
  bodySchema: z.ZodObject<T>,
  body: Q
) => {
  const result = bodySchema.safeParse(body);

  if (!result.success) {
    const {
      error: { stack },
    } = result;

    throw new RequestBodyError({
      status: 400,
      message: "InvalidBodyError",
      stack,
    });
  }

  return result.data;
};
