// for
for (let i = 0; i < 5; i++) {
  console.log("Bloque dentro del for");
}
console.log("A tomar por culo");

let count = [];
for (let i = 0; i < 5; i++) {
  console.log("vlaor del i: ", i);
  count.push(i);
}

console.log("FIN", count);
const fruits = ["apple", "banana", "kiwi", "watermelon", "orange", "Kiwi"];
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].toLowerCase() !== "kiwi") {
    console.log(fruits[i]);
  } else {
    console.log("******");
  }
}

for (let index = 0; index < 10; index++) {
  //continue
  if (index == 2 || index == 8) {
    //continue;
    break;
  }
  console.log("index ", index);
}

/// while

/*Enunciado: Dada una lista de números, crea una nueva lista que contenga únicamente los números impares de la lista original.

Lista de números: 1, 2, 33, 41, 5, 60, 74, 87, 90, 101


Paso 1: Crea un array llamado numbers que contenga al menos estos números
Paso 2: Crea un array vacío llamado oddNumbers.
Paso 3: Utiliza un bucle for para iterar sobre cada número en la lista numbers.
Paso 4: En cada iteración, verifica si el número actual es impar.
        Si es impar, agrégalo al array oddNumbers utilizando el método push().
        NOTA: números pares son aquellos que al dividirlos por 2 el residuo/resto es 0
Paso 5: Después del bucle, imprime en la consola el contenido del array oddNumbers.
*/

const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101];
const oddNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}
console.log(oddNumbers);
