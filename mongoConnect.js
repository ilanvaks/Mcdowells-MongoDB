import { MongoClient } from "mongodb";
import { MONGOURI } from "./credentials.js";

export const client = new MongoClient(MONGOURI)

const database = client.db("Mcdonalds-db")

export const productsCollection = database.collection("products")

