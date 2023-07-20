// ejemplo de if, else if, else, switch

let edad = 18;

if (edad >= 18) {
  //codigo
  let edad = 1;
  let legalAge = 18;
  console.log(`Eres mayor de edad con "${edad}" años`);
} else if (14 <= edad) {
  console.log("Eres adolescente");
} else {
  console.log('No eres "Mayor de edad"');
}

// ternario

const resultado = edad === 30; // true o un false
const message = resultado ? "Tienes mi edad" : "No tienes mi edad";

console.log(message);

console.log("<!--Example-->");

let value = 5;

if (value) {
  console.log(`Value: ${value}`);
} else {
  console.log("Else");
}

//switch
let day = "Monday";
if (day === "Monday") {
  console.log("It's Monday");
} else if (day === "Tuesday") {
  console.log("It's Tuesday");
} else if (day === "Wednesday") {
  console.log("It's Wednesday");
}

switch (day) {
  case "Monday":
    console.log("It's Monday Switch");
    break;
  case "Tuesday":
    console.log("It's Tuesday Switch");
    break;
  case "Wednesday":
    console.log("It's Wednesday Switch");
    break;
}
/*
Ejercicio: Conversor de temperaturas

Escribe un programa que solicite al usuario una temperatura y una escala de temperatura (Celsius o Kelvin) a la que quiera cambiar esa temperatura.

El programa hace 2 preguntas:
"Ingresa la temperatura:"
"Ingresa la escala a la que quieras cambiar tu temperatura (C o K):"

Casos para probar:

0 Cº son 273.15K
10 Cº son 283.15K
-10 Cº son 263.15K
*/

/*let temperatura = parseFloat(prompt("Ingresa la temperatura:"));
let escala = prompt(
  "Ingresa la escala a la que quieras cambiar tu temperatura (C o K):"
);

console.log("Esta es la escala", escala);

if (escala === "C") {
  console.log(`${temperatura} son ${temperatura + 273.15}k`);
} else if (escala === "K") {
  console.log(`${temperatura} son ${temperatura - 273.15}k`);
} else {
  console.log("Error de escala");
}*/

let temperatura = parseFloat(prompt("Ingresa la temperatura:"));
let escala = prompt(
  "Ingresa la escala a la que quieras cambiar tu temperatura (C o K):"
);

temperatura = escala === "C" ? temperatura - 273.15 : temperatura + 273.15;
console.log(temperatura);
