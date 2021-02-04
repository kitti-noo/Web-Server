

// function add(x){
//     return function(y){
//         return x + y
//     }
// }

// let  z = add(3)
// console.log(z(2))

// add = (x) => (y) =>  x+y

// let z = add(3)
// console.log(z(2))
// console.log(add(3)(2))

// function sumAll(){
//     var total = 0;
//     for (i in sumAll.arguments)
//         total+= sumAll.arguments[i]
//     return(total);
// }

// sumArrow = (...arguments) => {
//     var total = 0;
//     for (i in arguments)
//         total+= arguments[i]
//     return(total);
// }
// console.log(sumArrow(3,5,3,5,3,2,6))

// require('./mylib.js')
// foo1();

// let mymodule = require('./mylib')
// mymodule.foo1();

// const prompt = require('prompt-sync')()
// const name = prompt('What is your name?')
// npm install prompt-sync
// console.log(`Hello ${name}`)

// const EventEmitter = require('events')
// class MyEmitter extends EventEmitter{}
// const myEmitter = new MyEmitter();
// myEmitter.on('event',(a,b)=> console.log(`Foo: ${a},${b}`))
// myEmitter.emit('event','AAAA','BBB')