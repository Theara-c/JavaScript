//combine with arrays
const num1 = [ 1,2,3,4,5];
const num2 = [6,7,8,9,10];
let combine = [...num1,...num2];
console.log(combine);
// combine with objects

const a= { x: 1, y: 2};
const b = { y: 3, z: 4};
const c = { ...a, ...b};
console.log(c);