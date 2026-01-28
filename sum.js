const add = require("./add.js")
const multi = require("./multi.js")    


let a = add (1,5)
let m = multi (1,5)

console.log(a,m);



function sum(a,m){
    console.log(a+m);
    
}

sum(a,m);
// sum(add(3,4),multi(2,3))


