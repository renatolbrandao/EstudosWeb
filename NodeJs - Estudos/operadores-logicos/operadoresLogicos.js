// operador unário !
// serve para inverter o valor de uma booleana a fim de facilitar a verificação
// exemplo

const valido = false;
console.log(!valido); // resultado esperado: true
console.log(!true); // resultado esperado: false
console.log(!!valido); // dupla negação, resultado esperado: false

// operador && (AND)

function segundoOperador (){
    console.log('avaliando segundo operador: ');
    return true;
}

const a = false && segundoOperador();
console.log(a); //resultado: False
const b = true && segundoOperador();
console.log(b); // resultado: Avaliando segundo operador. True

// operador || (OR)

function segundoOperador (){
    console.log('avaliando segundo operador: ');
    return true;
}

const d = false || segundoOperador();
console.log(d); //resultado: False
const e = true || segundoOperador();
console.log(e); // resultado: Avaliando segundo operador. True
const f = !d || !e;
console.log(f); //resultado: Avaliando a negação de a e b. False

// estrutura de seleção
// if (verificador de condição) e switch (verificador de casos)

const pobre = false;
const rico = true;

if (pobre){
    console.log(pobre); // resultado: true
}else if(rico){
    console.log(rico); // resultado: false
}

//switch - verifica se algum dos casos informados é verdadeiro, caso seja executa o trecho de codigo isolado, caso nenhum caso seja atendido, executa o trecho default

const nome = 'Renato';

    switch(nome){
        case "João":
            console.log('João encontrado');
            break;
        case "Renato":
            console.log("Renato encontrado");
            break;
        default:
            console.log("Nenhum nome encontrado");
    }