let fs = require('fs')

let rs = fs.createReadStream("courses.json")

//data event will fire whenever the data is available

//error event => when error occurs while reading the live data

//end event => fire when the data is over at present, but still the complete data is not fetched

//close event=> data is over completely

rs.on('data',(chunkdata)=>{

    console.log(chunkdata.toString())

})

rs.on('error',(error)=>{

    console.log("Error happened while reading", error)

})

rs.on('close',()=>{

    console.log("All data are sent...No more data available")

})

rs.on('end',()=>{

    console.log("Data received are sent....waiting for next new data")

})