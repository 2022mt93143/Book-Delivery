let express = require('express')
let mongodb = require('mongodb')
let appServer = express()
let bp = require('body-parser')
appServer.use(bp.urlencoded({extended:false}))
let url = "mongodb://127.0.0.1:27017"
let mongoc = mongodb.MongoClient
//handling routing
//get,post


  
    appServer.get("/signup",(req,res)=>{
        let username = req.query.uName;
        let age = req.query.age;
        let email = req.query.email;
        let state = req.query.state;
        let country = req.query.country;
    
        mongoc.connect(url)
        .then(
            (connobj)=>{
                //validate the input against the entries available in mongoserver
                //select username,password from users where username=value and password=value
                //select count(username) from users where username=value and password=value
                let data = {'UserName': username,'Age':age,'Email':email,'State': state,'Country':country}
               let collobj= connobj.db("BITSRegistration").collection("UserRegistration").insertOne(data)
              .then(
                (collobj)=>{
                    console.log(collobj);
                    if(collobj.acknowledged==true){     
                        res.send(`<h1 style="color:blue">user has been registered successfuly</h1>` )
                      }
                      else{
                        res.send(`<h1 style="color:red">problem in registering the user , log error to the server</h1>` )
                      }
                }
              )
              .catch((counterr)=>{
                console.log("Error while Inserting the data. Error:   ",counterr)
                res.send(counterr)
              })
            }
    
        )
        .catch(
            (conerr)=>{
                console.log("Connection unsuccessful")
                res.send(conerr)
            }
        )
    })

appServer.listen(8080,()=>{
    console.log('Express server')
})
