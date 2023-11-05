const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    })

//Operador de Atribuição

const valido = false;
let idade = 18;
const mensagem = 'Favor informar dados válidos';

// Operador de Comparação
// 1 "=" atribuição, 
// 2 ou 3 "=", são utilizados para comparação, porém, com "==" compara valor, com "===" compara valor e tipo da varável

if (1 == '1'){
    console.log('São equivalentes');
}

if (1 === 1){
    console.log('São idênticos');
}


// Comparação com Operador diferente
// != ou !==

if (1!=2){
    console.log("1 é diferente de 2");
}

if (1 !== "1"){
    console.log("1 numérico é diferente de `1` como string");
}

// Métodos e Funções

function validar (valido){
    if (valido == true){
        return true;
    }else{
        return false;
    }
}

const teste = false;
console.log(validar(teste));

//sintaxe double arrow

const validar = (valido) =>{
    if (valido == true){
        return true;
    }else{
        return false;
    }
}

const teste2 = false;
console.log(validar(teste2));