import {prox,getProx,startGame,addDado,verifValor} from "./funcoes_player.js";
import {valorBot,botJoga} from "./funcoes_bot.js";
import {trocaClasse,clicarColuna,deletaDado} from "./funcoes_gerais.js";

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


//Começa o jogo
startGame();
