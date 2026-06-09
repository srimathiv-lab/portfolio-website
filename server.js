const { MongoClient } = require("mongodb");

const uri = "mongodb://srimathi123:srimathi308@ac-ejvn4d1-shard-00-00.7lfxf0t.mongodb.net:27017,ac-ejvn4d1-shard-00-01.7lfxf0t.mongodb.net:27017,ac-ejvn4d1-shard-00-02.7lfxf0t.mongodb.net:27017/portfolioDB?ssl=true&replicaSet=atlas-rvazxx-shard-0&authSource=admin&retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB ✔️");

    const db = client.db("portfolioDB");
    const users = db.collection("users");



    console.log("Inserted ID:", result.insertedId);

  } catch (err) {
    console.log("Error:", err.message);
  } finally {
    await client.close();
  }
}

run();