let express = require('express')
let appServer = express()
let bp = require('body-parser')
appServer.use(bp.urlencoded({extended:false}))

//handling routing
//get,post

appServer.post("/signin",(req,res)=>{
    let username = req.body.uName;
    let pwd = req.body.pwd;
 
    if(username == 'nithin' && pwd == 'accenture')
        res.send(`<h1 style="color:blue">Welcome ${username}. You have successfully logged in </h1>` )
        else
        res.send(`<h1 style="color:red">Invalid credentials. Please try again </h1>` )

})


appServer.listen(7000,()=>{
    console.log('Express server')
})