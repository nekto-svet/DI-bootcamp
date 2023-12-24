// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

let res = '';
let i = '*';
for (let k=0; k<6; k++) {
    res += `${i}\n`
    i+=' *'
}
console.log(res);

let res2 = '';
for (let a=0; a<7; a++){
    for (let b=0; b<a; b++){
        res2 += '* ';
    }
    res2 += '\n';
}
console.log(res2);
