let net = require('net')
const HOST = '127.0.0.1'
const PORT = '6969'

let client = new net.Socket()
//เรื่มการเชื่อมต่อ
client.connect(PORT,HOST,()=>{
    console.log(`Connected: ${HOST}:${PORT}`)
    //ส่งข้อมูลไป server
    client.write('Foo bar')
})

client.on('data',(data)=>{
    console.log(`Data: ${data}`)
    //ตัดการเชื่อมต่อ
    client.destroy();
})

client.on('close',()=>{console.log('Colse connetion')
})