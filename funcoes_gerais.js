// Definição da função que troca a classe do dado
function trocaClasse(d){
    for (const i of dados){
        tabuleiro.classList.remove(i);
    }
    tabuleiro.classList.add(dados[prox-1]);

}