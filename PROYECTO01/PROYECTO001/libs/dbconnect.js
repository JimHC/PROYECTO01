const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://CarloS:carlitos123@clusterdepruebacarlos.pqmzq.mongodb.net/?retryWrites=true&w=majority";

let client;

if (!client){
    try{
        client = new MongoClient(uri);
    }catch(e){
        console.log("No se pudo conectar  la Db");
        console.log(e.message);  
    }
}
module.exports = client;



