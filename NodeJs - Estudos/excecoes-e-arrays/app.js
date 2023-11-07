const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

try{



const listaDeProdutosDisponiveis = [
    'Pao',
    'Leite',
    'Cafe',
    'Laranja',
    'Macarrao',
    'Sabonete',
    'Detergente'
];

//o que for digitado na linha de comando, será atribuido aos argumentos
const listaDeArgumentos = process.argv.slice(2);

const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter( produto =>{
    return listaDeArgumentos.find(argumento => argumento === produto);
});

listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nós temos: ${produto}`));

const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
    return listaDeProdutosDisponiveis.find(produto => produto === argumento);
})

listaDeProdutosSolicitadosNaoDisponiveis.forEach(produto => console.log(`Este produto nós não temos: ${produto}`));

listaDeProdutosDisponiveis.sort();
listaDeProdutosDisponiveis.forEach(produto => console.log(`Este produto está disponível: ${produto}`));

}catch(e){
    console.log('Não foi possível executar pedido de compra');
};