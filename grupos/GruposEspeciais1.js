const texto = "João é calmo, mas no transito fica nervoso.";

console.log(texto.match(/[\wÃ-ú]+/gi));

//Positive lookahead
console.log(texto.match(/[\wÃ-ú]+(?=,)/gi));
console.log(texto.match(/[\wÃ-ú]+(?=\.)/gi));
console.log(texto.match(/[\wÃ-ú]+(?=, mas)/gi));

//Negative lookahead
console.log(texto.match(/[\wÃ-ú]+\b(?!,)/gi));
console.log(texto.match(/[\wÃ-ú]+[\s|\.](?!,)/g));
