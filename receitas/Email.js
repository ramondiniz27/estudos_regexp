const texto = `
Os emails dos convidados são
 - fulano@cod3r.com.br
 - xico@gmail.com
 - joao@empresa.info.brea
 - maria_silva@registro.bre
 - rafa.sampaio@yahoo.com
 - fulano+de+tal@escola.ninja.br
`;

console.log(texto.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/g));
