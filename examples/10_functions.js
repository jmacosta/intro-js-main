console.log("Funciones!!!!");
// definir function

function sayHi() {
  const saludo = "Hola que tal";
  console.log(saludo);
}

// invocar function
sayHi();

// another example

let age = 18;
if (age >= 18) {
  console.log("eres mayor de edad");
} else {
  console.log("NO eres mayor de edad");
}

function esMayorDeEdad(age, legalAge) {
  if (age >= legalAge) {
    console.log("eres mayor de edad");
  } else {
    console.log("NO eres mayor de edad");
  }
}

esMayorDeEdad(10, 21);
esMayorDeEdad(50, 21);
esMayorDeEdad(18, 21);
esMayorDeEdad(-21, 21);
esMayorDeEdad(18, 18);

function foo() {
  return 2;
}

const variable = foo();
console.log(variable);

const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101];
/*for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}
console.log(oddNumbers);*/

function oddNumbers(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}

console.log(oddNumbers(numbers));

const restar = (a = 0, b = 0) => a - b;

console.log(restar(3, 2));
console.log(restar(2, 3));
console.log(restar(4, -2));

// closures

const counter = () => {
  let count = 0;
  const increment = () => {
    console.log("Le sumo uno al contador");
    count++;
  };
  getCount = () => count;
  const decrement = () => {
    console.log("Le resto uno al contador");
    count--;
  };
  return { increment, count: getCount, decrement };
};

const contador1 = counter();
console.log(contador1.count());
contador1.increment();
contador1.increment();
contador1.increment();
contador1.increment();
console.log(contador1.count());
contador1.decrement();
console.log(contador1.count());

//// exercise

/*
Crear un closure de una calculadora que pueda hacer las siguientes operaciones guardando el resultado
*/

const calculadora = () => {
  let result = 0;
  const sumar = (value) => (result += value);
  const restar = (value) => (result -= value);
  const multiplicar = (value) => (result *= value);
  const dividir = (value) => (result /= value);

  return { sumar, restar, multiplicar, dividir };
};

const miCalculadora = calculadora();

console.log(miCalculadora.sumar(5)); // Debería imprimir 5
console.log(miCalculadora.restar(2)); // Debería imprimir 3
console.log(miCalculadora.multiplicar(4)); // Debería imprimir 12
console.log(miCalculadora.dividir(2)); // Debería imprimir 6
console.log(miCalculadora.sumar(10)); // Debería imprimir 16

// pasar una funcion como parametro

const realizarOperacion = (num1, num2, operacion) => operacion(num1, num2);
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
let resultadoSuma = realizarOperacion(1, 2, suma);
let resultadoResta = realizarOperacion(1, 2, resta);
let resultadoMensaje = realizarOperacion(
  10,
  20,
  (num1, num2) => `${num1} - ${num2}`
); // 10 -  20
console.log(resultadoSuma);
console.log(resultadoResta);
console.log(resultadoMensaje);
