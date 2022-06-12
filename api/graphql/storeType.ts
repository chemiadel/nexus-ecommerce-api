import {
  objectType,
  queryField,
  list,
  mutationField,
  nonNull,
  inputObjectType,
} from "nexus";
import { storeModel } from "../db/models/storeModel";

//store type
export const storeType = objectType({
  name: "Store",
  definition: (t) => {
    t.id("id"), t.string("name");
  },
});

//query store
export const queryStore = queryField("queryStore", {
  type: list(storeType),
  resolve: (root) => {
    return storeModel.find({});
  },
});

//mutate store
export const storeInputType = inputObjectType({
  name: "storeInputType",
  definition(t) {
    t.nonNull.string("name");
    t.nonNull.string("email");
    t.nonNull.string("password");
    t.nonNull.string("phone");
  },
});

export const createStore = mutationField("createStore", {
  type: storeType,
  args: {
    data: nonNull(storeInputType),
  },
  resolve: (_root, _args, ctx) => {
    return storeModel.insertOne({
      createdAt: new Date(),
      passwordModified: new Date(),
      ..._args.data,
    });
  },
});
