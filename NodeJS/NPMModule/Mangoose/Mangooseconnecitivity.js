let mongoose = require('mongoose');
let url = "mongodb://127.0.0.1:27017";
mongoose.connect(url)
.then(
    (connobj)=>{console.log('Connection success')}
)
.catch(
    (error)=>{console.log(error)}
)
.finally(
    ()=>{console.log('finally function')}
)