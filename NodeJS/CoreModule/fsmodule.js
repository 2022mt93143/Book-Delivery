//file operations
let fs = require('fs');
const { json } = require('stream/consumers');
//read from a file
console.log("before reading from the file - sync")
let contents = fs.readFileSync("courses.json")
console.log(contents.toString())
console.log(8+2);//writing of file depends on line 5 output
console.log("after reading from the file - sync")



console.log("after reading from the file - async")
fs.readFile("courses.json",(e,x)=>{
    if(e==null){
        let arr = []
    arr = x.buffer.toString();
    console.log(JSON.stringify(arr));
    let newarr  = [];
    var test = require('util');
    console.log(arr.length)
    arr.forEach(element => {
        let a = test.format("code = %d",element["coursecode"])
        console.log(a)
    });
    
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]["coursecode"])
        newarr[index] = test.format("code = %f",arr[index]["coursecode"])
    }
    console.log(newarr);
    console.log("after reading the file async")
    }
    else if(e!=null){
        console.log("Error has happened while reading the file. Error: ", e)
    }
})


console.log(8+2); //write a very huge file bg

 

/*

param callback=>readFile decides

how will i get the data => readfile method will send the data to mycallback function

who will call the callback function??? readFile()

which is hof? readFile

readFile(filepath){

    if(file exists?????){

        if(permission?????)

            if(readpermission)

                fopen()

                contents = readfile

            callback(err,data) //callback(null,contents) //callback(error,null)

 

}

 

*/