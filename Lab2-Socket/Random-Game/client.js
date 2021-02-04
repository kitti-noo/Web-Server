let net = require('net')
//const HOST = 'coin.werapun.com'
const HOST = '127.0.0.1'
const PORT = '6969'
let client = new net.Socket()
//เรื่มการเชื่อมต่อ
client.connect(PORT, HOST, () => {
    console.log(`Connected: ${HOST}:${PORT}`)
    //ส่งข้อมูลไป server
    client.write('6135512003')
})

client.on('data', (data) => {
    let answer = Math.floor(Math.random() * 21);
    let ans = parseInt(answer)
    if (data.toString() === 'OK') {
        console.log(data.toString())
        //console.log(ans.toString())
        client.write(ans.toString())
    }
    else if (data.toString() === 'END' || data.toString() === 'BINGO') {
        console.log(data.toString())
        //client.destroy()
    }
    else if (data.toString() === 'WRONG') {
        console.log(data.toString())
        //console.log(ans.toString())
        client.write(ans.toString())
    }
    else {
        console.log(data.toString())
    }
    // client.write(ans.toString())
    // console.log(data.toString())
    // client.destroy()
})
client.on('close', () => {
    console.log('Colse connetion')
})