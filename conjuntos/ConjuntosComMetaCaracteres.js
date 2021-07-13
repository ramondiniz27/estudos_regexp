const texto = ".$+*?-";

//nao precisa de escape dentro de um conjunto
console.log(texto.match(/[+.?$*+?]./g));
console.log(texto.match(/[$-?]/g)); // isso é um intervalo valido

// Não é um intervalo
console.log(texto.match(/[$\-?]/g));
console.log(texto.match(/[-?]/g));
