import { schema, types } from "papr";
import { papr } from "../papr";

export const storeModel = papr.model(
  "store",
  schema({
    createdAt: types.date({ required: true }),
    email: types.string({ required: true }),
    password: types.string({ required: true }),
    passwordModified: types.date({ required: true }),
    name: types.string({ required: true }),
    phone: types.string({ required: true }),
  })
);
