let mongoose = require('mongoose')

let schema = mongoose.Schema

let empSchemaFormat = new schema({Empno:String, Empname:String, age:Number, salary:Number})

 

let url="mongodb://127.0.0.1:27017/MongooseEmptable"

 

let express = require('express')

let appServer = express();

appServer.get("/InsertEmp",(req,res)=>{

    let eno = parseInt(req.query.empno);

    let ename = req.query.empname;

    let esal = parseInt(req.query.empsal);

    let eage = parseInt(req.query.empage);

 

    let empDoc ={"eno":eno,"Empname":ename,"age":eage,"salary":esal}

    mongoose.connect(url)

    .then(

        (connobj)=>{

           

              let association=  mongoose.model('Employee',empSchemaFormat)

              let finaldata = new association(empDoc)

              finaldata.save()

              .then(

                (obj)=>{

                    console.log("employee inserted successfully")

                    res.send("<h1>Employee registered successfully")

                }

              )

              .catch(

                (errsave)=>{

                    console.log("error while saving the data",errsave)

                    res.send("Db error")

                }

              )

              .finally()

 

        }

    )

    .catch(

        (connerr)=>{console.log("connection error",connerr)

        res.send("DB Error - while connecting")

    }

       

 

    )

   

 

 

})

 

appServer.listen(7001,()=>{console.log("App server listening")})