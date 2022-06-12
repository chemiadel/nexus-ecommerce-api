import { MongoClient } from "mongodb";
import Papr, { schema, types } from "papr";

export const papr = new Papr();

async function initialize() {
  try {
    const connection = await MongoClient.connect("mongodb://localhost:27017");
    papr.initialize(connection.db("store"));
  } catch (err) {
    console.error(err);
  }
}

initialize();
