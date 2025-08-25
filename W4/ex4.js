let students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
];

let array = students.map(
  (check) =>
    `  ${check.name} ${check.score >=80? "Passed": "Failed"}`
);
console.log(array);
