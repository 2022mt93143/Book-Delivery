/*make node as mongoclient*/

let mongodb = require('mongodb')
//make client
let mongoclient = mongodb.MongoClient
let url="mongodb://127.0.0.1:27017"
//const uri = "mongodb+srv://sudhaavalli:12345@cluster0.rcsvec3.mongodb.net";
mongoclient.connect(url)
.then((connobj)=>{
    console.log("Connection successful")
})
.catch((error)=>{
    console.log("Connection unsuccessful...here is the error", error)
})
.finally(()=>{console.log("finally function")})