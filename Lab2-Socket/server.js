let net = require('net') //module net
const HOST = '127.0.0.1' //localhost
const PORT = '6969' //port

net.createServer((sock)=>{ //callback function
    //เมื่อมีการเชื่อมต่อจะเรียกใช้ 1 ครั้ง
    console.log(`Connected : ${sock.remoteAddress}: ${sock.remotePort}`)
    //เมื่อมีข้อมูลส่งมา
    sock.on('data',(data)=>{ //event data
        console.log(`Data: ${data} form ${sock.remotePort}`)
        sock.write(`You said ${data}`)
    })
    //เมื่อมีตัดการเชื่อมต่อ
    sock.on('close',(data)=>{ //event close
        console.log('Colse connection')
    })
    //เมื่อมี error
    sock.on('error',(err)=> console.log('Er'))

}).listen(PORT,HOST)
console.log(`server start: ${HOST}:${PORT}`)