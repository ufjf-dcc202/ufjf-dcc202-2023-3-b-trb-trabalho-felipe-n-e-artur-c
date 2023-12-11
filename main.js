import {} from "./funcoes_player.js";
import {} from "./funcoes_bot.js";

const celulas = document.querySelectorAll("[data-cell]");
const tabuleiro = document.querySelector("[data-board]");
const dadoCanto = document.querySelector("[data-cel");
const celulas2 = document.querySelectorAll("[data-cell2]");
const tabuleiro2 = document.querySelector("[data-board2]");

let valorMin = 1;
let valorMax = 6;

// Array de classes de dado
let dados = ["d1", "d2", "d3", "d4", "d5", "d6"];

//Define Arrays para as grades e seus valores;
let valorCell = [0,0,0,0,0,0,0,0,0];
let coluna = [0,0,0];
let valorCell2 = [0,0,0,0,0,0,0,0,0];
let coluna2 = [0,0,0];

let prox;

const getProx = () => {
    prox = intervaloNumRandom(valorMin,valorMax);
}

function intervaloNumRandom(a, b)
{
    return Math.floor(Math.random() * (b - a + 1)) + a
}

const startGame = () => {
    getProx(); //Primeiro valor aleatório 
    
    dadoCanto.innerHTML = dadoCanto.classList.add(dados[prox-1]);
    
    tabuleiro.classList.add(dados[prox-1]);
    
    for(var i=0; i<9; i++)
    {
        celulas[i].addEventListener('click', indicePlayer(i), {once: true});
        celulas[i].addEventListener('click', clicarColuna, {once: true});
    }
}

const indicePlayer = (j) =>{
    console.log(j);
}
    

console.log(intervaloNumRandom(valorMin, valorMax));
