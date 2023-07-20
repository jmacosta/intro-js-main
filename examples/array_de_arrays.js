/*const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//console.log(matrix);
for (let index = 0; index < matrix.length; index++) {
  for (let j = 0; j < matrix[index].length; j++) {
    const element = matrix[index][j];
    console.log(element);
  }
}

// Crear un array bidimensional con 5 columnas y con 3 filas como las que aparecen abajo
/*
--*--
-***-
*****

Luego de definirlo recorrerlo para que se pinte como en el dibujo
*/

const tree = [
  ["-", "-", "*", "-", "-"],
  ["-", "*", "*", "*", "-"],
  ["*", "*", "*", "*", "*"],
];

for (let i = 0; i < tree.length; i++) {
  let branch = "";
  for (let j = 0; j < tree[i].length; j++) {
    branch += tree[i][j];
  }
  console.log(branch);
}
