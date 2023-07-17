let resultado = 10;
// typeof

console.log(typeof resultado);
resultado = true;
console.log(typeof resultado);
let precio = 9.99;
console.log(typeof precio);
let cantidad = Infinity;
console.log(typeof cantidad);

// null y undefined

let varNula = null;
let varUndefined;
console.log(typeof varNula);
console.log(typeof varUndefined);

let portal = "2d";
//let direccion = "calle Mayor, 1D";
let direccion = `Calle Mayor ${portal}`;
console.log(typeof direccion);
console.log(direccion);

/*
Ejercicio 2: Crea y muestra el tipo de estas variables:

Años: 35;
Jugador: Jordan;
Dorsal: 23;
Pertenece al salon de la fama: Sí
Equipo actual: ninguno

Y muestra un mensaje como este

"Soy Jordan de 35 años ahora mi equipo es: ninguno"*/

const age = 35;
const player = "Jordan";
const playerNumber = 23;
const isHallOfFame = true;
const actualTeam = null;

console.log(typeof age);
console.log(typeof playerNumber);
console.log(typeof isHallOfFame);
console.log(typeof actualTeam);

console.log(`Soy ${player} de ${age} años ahora mi equipo es: ${actualTeam}`);
