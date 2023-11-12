//HTTP module
let httpmodule = require('http')
var location = 'Hyderabad';
let appServer =httpmodule.createServer((req,res)=>{
    var location = 'Hyderabad'; 
    res.writeHead(200,{"Content-type":"text/html"})
    res.write(`<h1>I am from ${location}</h1>`)
    res.write("Welcome to first 2-tier architecutre in node.js")
    res.end();
})

appServer.listen(7000,()=>{console.log("App server is listening");})



// var http = require('http'),
//     fs = require('fs');

// fs.readFile('index.html', function (err, html) {
//     if (err) {
//         throw err; 
//     }       
//     http.createServer(function(request, response) { 
//         var location = 'Hyderabad'; 
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(7000);
// });