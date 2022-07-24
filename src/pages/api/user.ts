import type { NextApiHandler } from "next";
import { z } from "zod";

import { apiHandler, validateBody, validateQuery } from "@/lib/next";
import { updateUserSchema } from "@/models/user";
import { getUser, updateUser } from "@/services/user";

const querySchema = z.object({
  id: z
    .string()
    .refine((v) => {
      return !isNaN(Number(v));
    })
    .transform((v) => Number(v)),
});

const getHandler: NextApiHandler = async (req, res) => {
  const { id } = validateQuery(querySchema, req.query);
  const user = await getUser(id);
  return res.status(200).json(user);
};

const patchHandler: NextApiHandler = async (req, res) => {
  const { id } = validateQuery(querySchema, req.query);
  const { bio } = validateBody(updateUserSchema, req.body);
  const updatedUser = await updateUser(id, { bio });
  return res.status(200).json(updatedUser);
};

export default apiHandler({
  GET: getHandler,
  PATCH: patchHandler,
});
