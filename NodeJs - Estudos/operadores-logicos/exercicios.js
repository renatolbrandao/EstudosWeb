const { read } = require('fs');

const readLine = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
)

console.log('Este programa vai checar se você é maior de 18 anos e tem habilitação para saber se você pode entrar no kart');
console.log('Além da suas verificações, precisamos verificar se você está na lista de presença do horário');

readLine.question('Qual o ano do seu nascimento? ', ano =>{
    if (ano > 2004){
        console.log('Você não tem 18 anos');
        return;
    }else{
        readLine.question('Você possui habilitação? (Sim/Nao) ', temHabilitacao =>{
            if(!(temHabilitacao.toUpperCase() === 'SIM')){
                console.log('Você não tem habilitação para entrar no kart');
                return;
            }else{
                readLine.question("Qual seu nome? ", nome =>{
                    switch(nome){
                        case 'Douglas':
                            console.log('bem vindo ao kart Douglas');
                            break;
                        case 'Renato':
                            console.log('bem vindo ao kart Renato');
                            break;
                        default:
                            console.log('Seu nome não foi identificado na lista de presença');
                            break;
                    }
                })
            }
        })
        //console.log('Você tem a idade necessária para andar de Kart');
    }
})