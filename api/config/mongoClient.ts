import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();
const mongoString = process.env.mongo_url;
const dbName = process.env.database;

const mongoClient = {
    connect : () => {
        const client: mongoDB.MongoClient = new mongoDB.MongoClient(mongoString);
           
        client.connect();
           
        return client.db(dbName);
    }
}

export default mongoClient;
