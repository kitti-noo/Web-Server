// let  foo=(s1,s2,callback)=> {
//     return callback(s1+s2)
// }
// let callback = (result) => {
//     console.log(result)
// }
// foo('foo','bar',callback);

// let foo = (s1,s2,callback) =>{
//     setTimeout(()=> callback(s1+s2),2000)
// }
// foo('foo','bar',(res)=>console.log(res))

// let foo = (s1,s2)=>{
//     return new Promise((resole,reject)=> {
//         setTimeout(()=>{resole(s1+s2),1000})
//     })
// }
// foo("foo","bar").then((result)=>{console.log(result)})

// let test = async ()=> {
//     let result = await foo ('foo','bar')
//     console.log(result)
// }
// test()
