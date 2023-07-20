// for
/*
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
*/
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

/// while

let count = [];
let i = 0;
while (i <= 5) {
  i++;
}

// piedra papel o tijera por terminar
/*const rival = "piedra";
while (true) {
  const player = prompt(
    "Elige tu jugada, piedra, papel o tijera"
  );
  if (player.toLowerCase=='piedra'|| player.toLowerCase=='tijera'|| player.toLowerCase=='papel'){

  }

  if (player === "x") break;
  switch (player.toLowerCase) {
    case "piedra":
      console.log(`Empate ambos tienen ${rival}`);
      break;
    case "tijera":
      console.log(`perdiste rival tiene ${rival}`);
      break;
    case "papel":
      console.log(`Ganaste rival tiene ${rival}`);
      break;
  }
}*/

const opcionesValidas = ["piedra", "papel", "tijera"];

while (true) {
  const jugadaUsuario = prompt("Elige: piedra, papel, tijera o salir");

  if (jugadaUsuario === null || jugadaUsuario.toLowerCase() === "salir") {
    console.log("Hasta luego!");
    break;
  }

  const jugadaUsuarioMin = jugadaUsuario.toLowerCase();

  if (opcionesValidas.includes(jugadaUsuarioMin)) {
    const jugadaRival = "piedra";

    if (jugadaUsuarioMin === jugadaRival) {
      console.log("Empate");
    } else if (
      (jugadaUsuarioMin === "piedra" && jugadaRival === "tijera") ||
      (jugadaUsuarioMin === "papel" && jugadaRival === "piedra") ||
      (jugadaUsuarioMin === "tijera" && jugadaRival === "papel")
    ) {
      console.log("Has ganado! El papel envuelve la piedra!");
    } else {
      console.log("Has perdido! La piedra aplasta la tijera!");
    }
  } else {
    console.log("Escribe piedra, papel, tijera o salir.");
  }
}

/*

// piedra papel tijera
// vamos a preguntar al usuario su jugada, que tiene que ser "piedra" o "papel" o "tijera"
// si no es ninguna mostrar un mensaje de "opción incorrecta"
// si el usuario quiere salir que escriba "salir"
// el rival siempre va a tener piedra
// implementar la lógica
// "Ganaste tu tienes papel y el rival piedra"
// "Perdiste tu tienes tiejeras y el rival piedra"
// "Empate ambos tienen piedra"

while(true) {
  const pregunta = prompt("Elije: piedra, papel o tijera");
  const options = ['piedra', 'papel', 'tijera'];
  // if (options.includes(pregunta) === false) {
  if (!options.includes(pregunta)) {
    console.log('Opción incorrecta');
    continue;
  }

  if (pregunta === 'salir') break;

  const rival = "piedra"
  if (rival === pregunta) {
    console.log(`Empate, ambos tienen ${rival}`);
  } else if (
    (rival === 'piedra' && pregunta === 'papel') ||
    (rival === 'tijera' && pregunta === 'piedra') ||
    (rival === 'tijera' && pregunta === 'piedra')
  ) {
    console.log(`Ganaste tu tienes ${pregunta} y el rival ${rival}`);
  } else {
    console.log(`Pierdes tu tienes ${pregunta} y el rival ${rival}`);
  }
}
/*

while (true) {
  let userOption = "";
  const options = ["piedra", "papel", "tijera", "salir"];

  if (!options.includes(userOption)) {
      userOption = prompt("Elija opción correcta: 'piedra', 'papel' o 'tijera'. ");
  }
  else continue;

  if (userOption === "salir") break;
  else if (userOption === "piedra") console.log("Empatamos!");
  else if (userOption === "papel") console.log("Tú ganas!");
  else if (userOption === "tijera") console.log("Yo gano!"); //  solo queda tijerapiedr
}
*/
