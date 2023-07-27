// /*

// */

// // Arreglar este código

// const datos = [];

// // no pura :(
// const addElement = (arr, newElement) => {
//   const result = [...arr];
//   result.push(newElement);
//   return result;
// };

// console.log(addElement(datos, "Elemento")); /// ['Elemento']
// console.log(addElement(datos, "Elemento")); /// ['Elemento']
// console.log(addElement(datos, "Keepcoding")); /// ['Keepcoding']
// console.log(addElement(datos, "Keepcoding")); /// ['Keepcoding']
// console.log(datos); // []

// const house1 = { address: "sevilla", rooms: 3, Parking: true };
// const house2 = { address: "madrid", rooms: 2 };
// const newHouse = { ...house1, ...house2 };

// // map, filter

// const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101];
// let oddNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     oddNumbers.push(numbers[i]);
//   }
// }
// console.log(oddNumbers);
// oddNumbers = numbers.filter((element) => element % 2 !== 0);
// const double = numbers.map((element) => element * 2);
// console.log(oddNumbers);
// console.log(numbers);
// console.log(double);

// /*Ejercicio: Filtrar y transformar un array de objetos

// Enunciado: Dado un array de objetos que representan libros, utiliza filter para filtrar los libros cuyo agno de publicación sea posterior a 2000 y luego utiliza map para crear un nuevo array con los títulos de esos libros.*/

// const books = [
//   { titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald", agno: 1925 },
//   { titulo: "1984", autor: "George Orwell", agno: 1949 },
//   {
//     titulo: "Cien agnos de soledad",
//     autor: "Gabriel García Márquez",
//     agno: 1967,
//   },
//   {
//     titulo: "Harry Potter y la piedra filosofal",
//     autor: "J.K. Rowling",
//     agno: 1997,
//   },
//   { titulo: "El código Da Vinci", autor: "Dan Brown", agno: 2003 },
//   { titulo: "Crepúsculo", autor: "Stephenie Meyer", agno: 2005 },
//   { titulo: "Los juegos del hambre", autor: "Suzanne Collins", agno: 2008 },
// ];

// const newBooks = books
//   .filter((element) => element.agno > 2000)
//   .map((element) => element.titulo);
// console.log(newBooks);

// reduce, find, findIndex

// const numbersReduced = [1, 2, 3, 4, 5];
// numbersReduced.reduce((acum, item) => {
//   console.log("el acumulador", acum);
//   console.log("el item", item);
//   const resultado = acum + item;
//   return resultado;
// }, 0);

const transactions = [
  { id: "trx001", amount: 100, description: "Purchase 1" },
  { id: "trx002", amount: 50, description: "Purchase 2" },
  { id: "trx003", amount: 200, description: "Purchase 3" },
];

// usando reduce

/*
const resultado = {
  trx001: { id: 'trx001', amount: 100, description: 'Purchase 1' },
  trx002: { id: 'trx002', amount: 50, description: 'Purchase 2' },
  trx003: { id: 'trx003', amount: 200, description: 'Purchase 3' }
}
*/

const resultado = transactions.reduce((acum, item) => {
  const newObject = { [item.id]: { ...item } };
  acum = { ...acum, ...newObject };
  return acum;
}, {});

console.log(resultado);
