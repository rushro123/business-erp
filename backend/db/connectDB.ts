import {MongoClient,Db} from 'mongodb';    
import { th } from 'zod/locales';

const uri=process.env.MONGO_URI as string;
const dbName=process.env.dbName || "businessERP";

if (!uri){
    throw new Error("MONGO_URI is not defined in environment variables");
}
let client:MongoClient|null=null;
let db:Db|null=null;

export const connectDB = async (): Promise<Db> => {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
  return client.db(dbName);
};