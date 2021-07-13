const texto = "ABC [abc] a-c 1234";

console.log(texto.match(/[a-c]/g));
console.log(texto.match(/a-c/g)); // nao define um range
console.log(texto.match(/[A-z]/g)); // intervalos usam a ordem UNICODE

//tem que respeitar a ordem da table UNICODE
// console.log(texto.match(/[a-Z]/g)); nao pode ser assim
// console.log(texto.match(/[4-1]/g)); nem assim
