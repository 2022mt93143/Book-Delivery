let express = require("express");
let mongodb = require("mongodb");
let appServer = express();
let bp = require("body-parser");
appServer.use(bp.urlencoded({ extended: false }));
let url = "mongodb://127.0.0.1:27017";
let mongoc = mongodb.MongoClient;

//handling routing
//get,post

appServer.get("/Getemployee", (req, res) => {
  //empnum=1239 //read the route param value in node js using express server
  let EmpId = Number(req.query.Id);
  console.log(EmpId);
  mongoc
    .connect(url)
    .then((connobj) => {
      //validate the input against the entries available in mongoserver
      //select username,password from users where username=value and password=value
      //select count(username) from users where username=value and password=value
      let collobj = connobj.db("BITSEmployee").collection("Employee");
      let totalcnt = collobj.countDocuments({ empno: EmpId })
        .then((totalcnt) => {
          console.log(totalcnt);
          if (totalcnt != 0) {
            let cnt = collobj.deleteOne({ empno: EmpId })
              .then((cnt) => {
                console.log(cnt);
                //  let value = cnt.filter(x=>x.empno == EmpId)
                if (cnt) {
                  //delete cnt[0]["_id"];
                  res.send(`<h1 style="color:blue">${JSON.stringify(cnt)} Sucessfully deleted </h1>`);
                } else {
                  res.send(`<h1 style="color:red">employee not found </h1>`);
                }
              })
              .catch((counterr) => {
                console.log("Error while fetching the count. Error:   ",counterr);
                res.send(counterr);});
          } else {
            res.send(`<h1 style="color:red">employee not found </h1>`)
          }
        })
        .catch((counterr) => {
          console.log("Error while fetching the count. Error:   ", counterr);
          res.send(counterr);
        });
    })
    .catch((conerr) => {
      console.log("Connection unsuccessful", conerr);
      res.send(conerr);
    });
});

appServer.listen(8080, () => {
  console.log("Express server");
});
