// destructuring

const arr = ["message1", "message2", "message3"];

arr[0];
arr[1];
arr[2];

const user = { name: "Jhon", age: 34 };

user.name;
user.age;

const [, , position2] = arr;

// console.log(position1);
console.log(position2);

const { name: firstName, age } = user;

console.log(age);
console.log(firstName);
