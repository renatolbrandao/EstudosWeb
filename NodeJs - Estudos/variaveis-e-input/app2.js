const readLine = require('readline').createInterface(
    {input: process.stdin, 
     output: process.stdout
    })

const minhaPrimeiraConstanteString = 'Minha Primeira Constante';
console.log(minhaPrimeiraConstanteString);

let leituraDeCampo;

readLine.question('Por favor, digite um valor: ', input => {
    leituraDeCampo = input;
console.log(`o usuário digitou: ${leituraDeCampo}`)
});


