// api/server.ts
import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import "./db/papr";

export const server = new ApolloServer({ schema });
