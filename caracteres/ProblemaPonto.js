const texto = "Bom\ndia";

console.log(texto.match(/.../gi));
console.log(texto.match(/..../gi)); // o ponto nao engloba o /n

//dotall - algumas linguagens tem uma flag /exp/s, mas JS não
