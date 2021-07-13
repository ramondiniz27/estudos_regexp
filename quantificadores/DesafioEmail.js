const texto = `Os e-mails  dos convidados são:
- fulano@cod3r.com.br
- xico@gmail.com
- ramon.diniz27@gmail.com
- ramon-rda@hotmail.com

`;
// const regex = /[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9]{2,4}\.[a-zA-Z]{2}?/g;
// const regex = /\w+@\w+\.\w{2,4}/g;
// const regex = /[\w.]+@\w+\.\w{2,4}/g;
const regex = /[\w.+\-?]+@\w+\.\w{2,4}\.?\w{0,2}/g;

console.log(texto.match(regex));
