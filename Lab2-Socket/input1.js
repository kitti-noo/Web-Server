console.log('a: ')
let stdin = process.openStdin() //open input
stdin.addListener("data",  (a) => {
   // console.log(a.toString().trim())
   console.log('b: ')
   stdin.addListener("data", (b) => {
       console.log(a*b)
       stdin.destroy()
   })
})
