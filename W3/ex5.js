const person = { name: 'Bob', address: { city: 'Phnom Penh', zip: 12345 } }
const personInfo ={
    username: person.name,
    city: person.address.city,
}

console.log(personInfo);
