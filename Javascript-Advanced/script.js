// Array of objects

// Mutation
const arr = [1, 2, 3, 4, 5];

// add new data into original data

arr.push(6);

// 1. ForEach();

const students = [
  { name: "John", age: 20, dept: true },
  { name: "Jane", age: 21, dept: true },
  { name: "Jenny", age: 22, dept: true },
  { name: "Peter", age: 23, dept: true },
  { name: "Sally", age: 24, dept: true },
];

students.forEach((item, index) => {
  console.log(item, index);
});

// 2. map();

const newStudents = students.map(() => {
  console.log(user);
  return user;
});

// 3. filter();
const debtStudents = students.filter((student) => {
  return student.dept === true;
});

//4. reduce();
const products = [
  { name: "banana", price: 1 },
  { name: "orange", price: 2 },
  { name: "apple", price: 3 },
  { name: "pear", price: 4 },
];

const sum = products.reduce(function (total, product) {
  console.log(product);
  return total + product.price;
}, 0);
