/*

*/

// Arreglar este código

const datos = [];

// no pura :(
const addElement = (arr, newElement) => {
  const result = [...arr];
  result.push(newElement);
  return result;
};

console.log(addElement(datos, "Elemento")); /// ['Elemento']
console.log(addElement(datos, "Elemento")); /// ['Elemento']
console.log(addElement(datos, "Keepcoding")); /// ['Keepcoding']
console.log(addElement(datos, "Keepcoding")); /// ['Keepcoding']
console.log(datos); // []

const house1 = { address: "sevilla", rooms: 3, Parking: true };
const house2 = { address: "madrid", rooms: 2 };
const newHouse = { ...house1, ...house2 };

// map, filter

const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101];
let oddNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}
console.log(oddNumbers);
oddNumbers = numbers.filter((element) => element % 2 !== 0);
const double = numbers.map((element) => element * 2);
console.log(oddNumbers);
console.log(numbers);
console.log(double);
