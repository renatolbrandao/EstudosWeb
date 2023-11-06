const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function validaNumero (numero){
        const num = Number.parseFloat(numero);
        if (!num){
            console.log('número informado não é valido');
        }
        return num;
        
};

const validarOperador = (operador) =>{
    switch (operador){
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;
        default:
            console.log('Operador informado é invalido');
            return null;
    }
};

readLine.question('Favor informar um número: ', (numero1) => {

    const numValidado1 = validaNumero(numero1);
    
    if(numValidado1){
        readLine.question('Favor informar outro número: ', (numero2) => {
            const numValidado2 = validaNumero(numero2);

            if (numValidado2){
                    readLine.question('Favor informar o operador:', (operador) =>{
                    const operadorValidado = validarOperador(operador);
                    if(operadorValidado){
                        switch(operadorValidado){
                            case '+': console.log(`Operador selecionado adição, resultado: ${numValidado1} + ${numValidado2} = ${numValidado1 + numValidado2}`);
                                break;
                            case '-': console.log(`Operador selecionado subtração, resultado: ${numValidado1} - ${numValidado2} = ${numValidado1 - numValidado2}`);
                                break;
                            case '*': console.log(`Operador selecionado multiplicação, resultado: ${numValidado1} * ${numValidado2} = ${numValidado1 * numValidado2}`);
                                break;
                            case '/': console.log(`Operador selecionado divisão, resultado: ${numValidado1} / ${numValidado2} = ${numValidado1 / numValidado2}`);
                                break;
                            case '%': console.log(`operador selecionado móddulo, resultado: ${numValidado1} % ${numValidado2} = ${numValidado1 % numValidado2}`);
                                break;
                            default: 
                                break;
                        }
                    }
                }
            )}

        });
    }

});