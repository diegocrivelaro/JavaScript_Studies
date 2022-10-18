/*
Ele copia e move os elementos de um array para o índice especificado, sem retornar um novo array e sem alterar o tamanho do array.

copyWithin(índice para qual os elementos vão ser movidos, indice inicial dos elementos a serem copiados, indice final dos elementos a serem copiados)
*/

const numerosAntigos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numerosAntigos.copyWithin(0, 8));
// [ 9, 10, 3, 4, 5, 6, 7, 8, 9, 10 ]

const numerosNovos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numerosNovos.copyWithin(1, 6, 8));
// [ 1, 7, 8, 4, 5, 6, 7, 8, 9, 10 ]
