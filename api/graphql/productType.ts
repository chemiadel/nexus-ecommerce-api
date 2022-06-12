import {
  objectType,
  queryField,
  list,
  mutationField,
  nonNull,
  inputObjectType,
} from "nexus";
import { productModel } from "../db/models";

//product type
export const productType = objectType({
  name: "Product",
  definition: (t) => {
    t.nonNull.id("createdAt");
    t.nonNull.string("storeId");
    t.nonNull.string("name");
    t.nonNull.string("slug");
    t.nonNull.int("price");
    t.nonNull.list.string("photos");
    t.nonNull.string("description");
  },
});

//product store
export const queryProduct = queryField("queryProduct", {
  type: list(productType),
  resolve: (root) => {
    return productModel.find({});
  },
});

//product store
export const productInputType = inputObjectType({
  name: "productInputType",
  definition(t) {
    t.nonNull.string("storeId");
    t.nonNull.string("name");
    t.nonNull.int("price");
    t.nonNull.list.string("photos");
    t.nonNull.string("description");
  },
});

export const createProduct = mutationField("createProduct", {
  type: productType,
  args: {
    data: nonNull(productInputType),
  },
  resolve: (_root, _args, ctx) => {
    return productModel.insertOne({
      createdAt: new Date(),
      slug: _args.name,
      ..._args.data,
    });
  },
});
