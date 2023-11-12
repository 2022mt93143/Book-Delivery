let fspromise = require('fs/promises')

fspromise.readFile("courses1.json")

.then((data)=>{

    console.log(data.toString())

 

})

.catch((err)=>{

    console.log("Error while reading the file. Error:",err)

})