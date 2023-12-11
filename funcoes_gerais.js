// Definição da função que troca a classe do dado
function trocaClasse(d){
    for (const i of dados){
        tabuleiro.classList.remove(i);
    }
    tabuleiro.classList.add(dados[prox-1]);

}

//Função que ativa ao clicar na célula
const clicarColuna = (x) => {
    // Botar o dado
    const cell = x.target;
    let dadoSerAdicionado = prox;
    addDado(cell,dadoSerAdicionado);
    
    //Começo da ideia de como deletar dados
    //deletaDado(celulas2,indexApagar,valorCell2);
    
    //OBS: descobrir como saber o index da célula clicada
    
    
    dadoCanto.innerHTML = dadoCanto.classList.remove(dados[prox-1]);
    
    //Verifica presença de dado e calcula valor de cada coluna
    verifValor(x);

    getProx();
    dadoCanto.innerHTML = dadoCanto.classList.add(dados[prox-1]); 

    //Troca classe
    trocaClasse(dadoSerAdicionado);

    //Bot joga
    botJoga();


    // Fim de Jogo
    const acabou = endGame("d1","d2","d3","d4","d5","d6");
    if (acabou === true){
        console.log('acabou rs');
        
    }
}