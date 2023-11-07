//Tratamento de Exceção
//exemplos: try/catch/finally (tentar/capturar/finalmente)

// try-catch

let usuarios;
try{
    usuarios = buscarTodosUsuarios();
}catch(e){
    console.log('Ocorreu um erro buscar os usuários');
};

// try-catch-finally

let notificacao = "";
try{
    processarPagamentosPendentes();
    notificacao = 'Pagamentos processados com sucesso!';
}catch(e){
    notificacao = 'Erro ao processar pagamentos';
}finally{
    notificarAdministradorSistema(notificacao);
};

//Arrays
// Lista de Informações/Coleção de Dados de mesmo tipo

const notas = [9,7,8,93.7,8];
const funcionarios = ["Emerson ", "Zacarias", "Morgana"];

// Metodos para utilizar com Arrays
// .filter() -> aplica filtro e retorna uma lista menor;
// .map() -> faz a transformação da linha para o formato que você desejar;
// .find() -> encontra o primeiro registro da lista que atende as condições fornecidas e retorna o mesmo
// .sort() -> ordena a lista de acordo com a condição/atributo passado;
// .push() -> Adiciona um ou mais itens na lista;

//Funções anônimas
//é uma instrução ou expressão embutida que pode ser usada em qualquer outro método que um dos seus parametros de entrada seja 'callback'

const nota =[90,71,82,93,75,82];
const qtdNotasAcima80 = nota.filter(n => n > 80).length;
console.log(qtdNotasAcima80, 'notas acima de 80');