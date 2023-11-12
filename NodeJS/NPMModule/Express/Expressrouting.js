let express = require('express')
let appServer = express()
let electronics = {headset:'boatrockers',speakers:'Samsung',hometheatre:'Sony'}

let men = {tshirt:'blue',shirt:'red',pantype:'white Jean'}

let women = {kurthi:'purple',tshirt:'checked green',jean:'black'}

let children ={frock:'full-length',skirt:'grey'}

//handling routing
//get,post

appServer.get('/electronics',(req,res)=>{
    res.send(`Here is your electronic details ${JSON.stringify(electronics)}`)
res.send(`${JSON.stringify(electronics)}`)
})

appServer.get('/men',(req,res)=>{
    res.send(`${JSON.stringify(men)}`)
    })

    appServer.get('/children',(req,res)=>{
        res.send(`${JSON.stringify(children)}`)
        })

        
appServer.get('/women',(req,res)=>{
    res.send(`${JSON.stringify(women)}`)
    })


appServer.listen(7000,()=>{
    console.log('Express server')
})