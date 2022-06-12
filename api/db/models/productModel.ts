import { schema, types } from "papr";
import { papr } from "../papr";

export const productModel = papr.model(
  "product",
  schema({
    createdAt: types.date({ required: true }),
    storeId: types.string({ required: true }),
    name: types.string({ required: true }),
    slug: types.string({ required: true }),
    price: types.number({ required: true }),
    photos: types.array(types.string()),
    description: types.string(),
  })
);
