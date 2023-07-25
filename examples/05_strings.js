// ejemplos strings

let username = "Keepcoding_user";
let words_array = ["hola", "pepe", "otro"];

console.log(username.toLocaleUpperCase());
console.log(words_array.includes("pepes"));

// Exercise

let temperatura = parseFloat(prompt("Ingresa la temperatura:").trim());
let escala = prompt(
  "Ingresa la escala a la que quieras cambiar tu temperatura (C o K):"
)
  .trim()
  .toUpperCase();

if (escala === "C") {
  let kelvin = temperatura + 273.15;
  console.log(temperatura + " °C son " + kelvin + " K");
} else if (escala === "K") {
  let celsius = temperatura - 273.15;
  console.log(temperatura + " K son " + celsius + " °C");
} else {
  console.log("Escala no válida. Por favor, ingresa 'C' o 'K'.");
}
