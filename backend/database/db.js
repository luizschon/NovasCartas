const { MongoClient, ServerApiVersion } = require('mongodb');
// const dotenv = require('dotenv');
// dotenv.config(); 

// const uri = process.env.MONGODB_URI;
const uri = "mongodb+srv://rafaelnogalha:KukZWG2PUBeR03Rm@novascartas.1dgcv37.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  // const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("Connected to MongoDB");
  client.close();
});

