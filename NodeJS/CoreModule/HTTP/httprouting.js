//HTTP module

let httpmodule = require('http')

let electronics = {headset:'boatrockers',speakers:'Samsung',hometheatre:'Sony'}

let men = {tshirt:'blue',shirt:'red',pantype:'white Jean'}

let women = {kurthi:'purple',tshirt:'checked green',jean:'black'}

let children ={frock:'full-length',skirt:'grey'}

/*/electronics - display electronics json data

/men - display mens wear

/women - women's wear

/children - kids'wear

*/

let appServer =httpmodule.createServer((req,res)=>{

    //html content - send as response

    //<h1>I am from location<h1>
    res.writeHead(200,{"Content-type":"text/html"})
   //read the url //display the content accordingly
  // req.url - route path
  if(req.url =="/electronics"){
    //display electronic json //html content

    res.write(`${JSON.stringify(electronics)}`)
  }
  else if(req.url =="/men"){
    res.write(`${JSON.stringify(men)}`)
  }
  else if(req.url=="/women"){
    res.write(`${JSON.stringify(women)}`)
  }
  else if(req.url =="/kids"){
    res.write(`${JSON.stringify(children)}`)
  }
    res.end();
})

appServer.listen(7000,()=>{console.log("App server is listening");

console.log('Listening on port ' + appServer.address().port);})