let number = [ 5 ,12, 8, 130, 44];
let first = number.slice(1,4);
let second = number.filter(find);
function find (number){
    return number >=10;
}
console.log(first);
console.log(second);