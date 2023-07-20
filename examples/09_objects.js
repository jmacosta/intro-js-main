let car = {
  brand: "Ford",
  year: 1969,
  model: "Mustang",
  firstOwner: "Keepcoding",
  country: { code: "es-ES", country: "Spain" },
};

/*car.brand = "Ford";
car.year = 1969;
car.model = "Mustang";
car.firstOwner = "Keepcoding";
car.country = { code: "es-ES", country: "Spain" };*/

console.log(car);
let nameVar = "year";
console.log(car[nameVar]);

let user = {
  name: "Matt",
  age: 25,
  city: "Madrid",
  hobbies: ["futbol", "basket"],
};

console.log(user.hobbies[1]);

let students = [
  {
    name: "Juan",
    age: 22,
    cursos: [
      { name: "Mathematics", score: 95 },
      { name: "History", score: 95 },
    ],
  },
  {
    name: "Maria",
    age: 20,
    cursos: [
      { name: "Mathematics", score: 80 },
      { name: "History", score: 75 },
    ],
  },
];

console.log(students[1].cursos[1].score);

for (let i = 0; i < students.length; i++) {
  for (let j = 0; j < students[i].cursos.length; j++) {
    console.log(
      students[i].name +
        " " +
        students[i].cursos[j].name +
        " " +
        students[i].cursos[j].score
    );
  }
}
