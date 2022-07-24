import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

import { RequestBodyError, RequestQueryError } from "./error";

export const errorHandler = (error: any, res: NextApiResponse) => {
  if (error instanceof RequestQueryError) {
    return res.status(error.status).json({ error: error.serialize() });
  }
  if (error instanceof RequestBodyError) {
    return res.status(error.status).json({ error: error.serialize() });
  }

  return res.status(500).json({ error: { message: error.message, status: 500 } });
};

const httpMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"] as const;

type HttpMethod = typeof httpMethods[number];

const isHttpMethod = (method: string): method is HttpMethod => {
  return httpMethods.some((m) => m === method);
};

type Handlers = {
  [key in HttpMethod]?: NextApiHandler;
};

export const apiHandler = (handlers: Handlers) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;

    if (!method || !isHttpMethod(method)) {
      return res.status(405).json({
        error: {
          message: `Method ${req.method} Not Allowed`,
          status: 405,
        },
      });
    }

    const handler = handlers[method];

    if (!handler) {
      return res.status(405).json({
        error: {
          message: `Method ${req.method} Not Allowed`,
          status: 405,
        },
      });
    }

    try {
      await handler(req, res);
    } catch (err) {
      errorHandler(err, res);
    }
  };
};
