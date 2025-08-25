const array =[ 10,20,30,40,50];
const [a,b, ...c]= array;
let copy = [...c];
console.log(a, b, copy);