let express = require('express')
let appServer = express()
//handling routing
//get,post

appServer.get("/signup",(req,res)=>{
    let username = req.query.uName;
    let age = req.query.age;
    let email = req.query.email;
    let state = req.query.state;
    let country = req.query.country;
  

  res.send(`The user ${username} has been registered successfully`)

})


appServer.listen(7000,()=>{
    console.log('Express server')
})