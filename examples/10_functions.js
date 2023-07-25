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
    count++;
  };
  getCount = () => count;
  const decrement = () => {
    count--;
  };
  return { increment, count: getCount };
};

const contador1 = counter();
console.log(contador1.count());
contador1.increment();
console.log(contador1.count());
