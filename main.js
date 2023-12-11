import {prox,getProx,startGame,addDado,verifValor,celulas} from "./funcoes_player.js";
import {valorBot,botJoga,celulas2} from "./funcoes_bot.js";
import {trocaClasse,clicarColuna,deletaDado,tabuleiro,dadoCanto} from "./funcoes_gerais.js";

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

function intervaloNumRandom(a, b)
{
    return Math.floor(Math.random() * (b - a + 1)) + a
}
    
export{dados,coluna,coluna2,valorCell,valorCell2,valorMin,valorMax,intervaloNumRandom};

//Começa o jogo
startGame();