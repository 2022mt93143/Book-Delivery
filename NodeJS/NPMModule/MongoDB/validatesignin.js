let express = require('express')
let mongodb = require('mongodb')
let appServer = express()
let bp = require('body-parser')
appServer.use(bp.urlencoded({extended:false}))
let url = "mongodb://127.0.0.1:27017"
let mongoc = mongodb.MongoClient
//handling routing
//get,post

appServer.post("/signin",(req,res)=>{
    let username = req.body.uName;
    let pwd = req.body.pwd;

    mongoc.connect(url)

    .then(
        (connobj)=>{
            //validate the input against the entries available in mongoserver
            //select username,password from users where username=value and password=value
            //select count(username) from users where username=value and password=value
           let collobj= connobj.db("AugustNodejs").collection("Users")
          let cnt= collobj.countDocuments({"Username":username,"Password":pwd})
          .then(
            (cnt)=>{
                console.log(cnt);
                if(cnt==1){     
                    res.send(`<h1 style="color:blue">Welcome ${username}. You have successfully logged in </h1>` )
                  }
                  else if(cnt==0){
                    res.send(`<h1 style="color:red">Invalid credentials. Please try again </h1>` )
                  }
            }
          )
          .catch((counterr)=>{
            console.log("Error while fetching the count. Error:   ",counterr)
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


appServer.listen(7000,()=>{
    console.log('Express server')
})