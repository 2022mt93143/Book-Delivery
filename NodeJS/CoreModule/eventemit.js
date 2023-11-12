//emit - triggering
let events = require('events')
//listener  =>on => listener => keyword(event)
let obj = new events();
//1->listen to event //info,error,warning
obj.on('info',(msg)=>{console.log(msg)})
obj.on('warning',(msg)=>{console.log(msg)})
obj.on('error',(msg)=>{console.log(msg)})
//2->trigger the event
obj.emit('warning',"There is an unused variable in your program");
obj.emit("error","Object reference not set to an instance of the object!!!!")