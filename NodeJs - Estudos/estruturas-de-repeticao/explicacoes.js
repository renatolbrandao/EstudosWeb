//Estruturas de Repetição
// for -> faça/para
// while -> enquanto
// do while -> (faça enquanto)
// for of -> (para de)

    // inicio               condição           ação
for (let pneusTrocados = 0; pneusTrocados < 4; pneusTrocados++){
    trocarPneu();
};

let temCarroNaFila = true;
// checa condição antes de começar
while(temCarroNaFila){
    lavarCarro();
    temCarroNaFila = verificarTemCarroNaFila();
};

let atividadesPendentes;
// executa uma ação e somente depois verifica a condição
do{
    atividadesPendentes = consultarAgendaDeHoje();
    informarAtividades(atividadesPendentes);
    await umaHora();
}while(atividadesPendentes.length > 0);

const novosAlunos = ["João", "Felipe", "Alfredo"];
// o for of só funcionará dentro de um array e extrai uma variável contendo um dos valores do Array
for (const aluno of novosAlunos){
    darBoasVindas(aluno);
};