let express = require('express')
let appServer = express()
var employee =[

 

    {"empno":1231,"empname":"Thangaraj S","age":44,"salary":34567.7734},

 

    {"empno":1232,"empname":"Rahul Ghali","age":55,"salary":12345.6698},

 

    {"empno":1233,"empname":"Sindhu Nambiar","age":66,"salary":34343.9967},

 

    {"empno":1234,"empname":"Yadavi N Swamy","age":77,"salary":23232.4456},

 

    {"empno":1235,"empname":"Varun Raghav","age":33,"salary":25356.8832},

 

    {"empno":1236,"empname":"Virat Kohli","age":22,"salary":23311.5455},

 

    {"empno":1237,"empname":"Bhagya","age":66,"salary":34343.9967},

 

    {"empno":1238,"empname":"Snigdha","age":77,"salary":23232.4456},

 

    {"empno":1239,"empname":"Karthik","age":33,"salary":25356.8832},

 

    {"empno":1240,"empname":"Sudha","age":22,"salary":23311.5455}

 

    ]

//handling routing
//get,post

appServer.get("/getEmployeeDetails/:empnum",(req,res)=>{

  //empnum=1239 //read the route param value in node js using express server

  let searchempno = req.params.empnum;
  console.log("Search emp no = ",searchempno)
  let value = employee.filter(x=>x.empno == searchempno)
  //logic=> printing the respective employee details
 res.send(`${JSON.stringify(value)}`)

})


appServer.listen(7000,()=>{
    console.log('Express server')
})