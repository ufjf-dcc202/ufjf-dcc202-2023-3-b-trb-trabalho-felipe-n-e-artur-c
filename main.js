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


function intervaloNumRandom(a, b)
{
    return Math.floor(Math.random() * (b - a + 1)) + a
}


console.log(intervaloNumRandom(valorMin, valorMax));
