let url ="https://www.google.com/search?q=node+js&sca_esv=557369124"
let urlmodule = require('url') //import statement
let urlobj = urlmodule.parse(url)
console.log(urlobj.path)
console.log(urlobj.query)
console.log(urlobj.hostname)
console.log(urlobj.protocol)
console.log(urlobj.auth)
console.log(urlobj.port)
console.log(urlobj.origin)
