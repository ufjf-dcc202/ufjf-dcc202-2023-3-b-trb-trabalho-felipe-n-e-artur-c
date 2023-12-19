//BUGALHA REAL
import {celulas,valorCell,coluna,verifValor} from "./FuncoesPlayer.js";
import {valorCell2,coluna2,celulas2,botJoga,dadoCanto} from "./FuncoesBot.js";

const msgVitoria = document.querySelector("[data-msg-win]");
const tabuleiro = document.querySelector("[data-board]");

function intervaloNumRandom(a, b)
{
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

// Array de classes de dado
let dados = ["d1", "d2", "d3", "d4", "d5", "d6"];

const valorMin = 1;
const valorMax = 6;

let prox;

const boardCheio = [
    [0,1,2,3,4,5,6,7,8]
];

const endGame = (c1,c2,c3,c4,c5,c6,qualPlayer) => {
    return boardCheio.some((combination) => {
        return combination.every((index)=>{
            return (qualPlayer[index].classList.contains(c1) || qualPlayer[index].classList.contains(c2) || qualPlayer[index].classList.contains(c3) || qualPlayer[index].classList.contains(c4) || qualPlayer[index].classList.contains(c5) || qualPlayer[index].classList.contains(c6))
        });
    });
};

const getProx = () => {
    prox = intervaloNumRandom(valorMin,valorMax);
}


const startGame = () => {
getProx(); //Primeiro valor aleatório 

dadoCanto.innerHTML = dadoCanto.classList.add(dados[prox-1]);

tabuleiro.classList.add(dados[prox-1]);

    for(var i=0; i<9; i++){
        celulas[i].addEventListener('click', clicarColuna, {once: true});
    }
    
}

function addDado(cel1,dadoRandom){
    cel1.classList.add(dados[dadoRandom-1]);
}


function imprimeValor(colAlvo,valSoma,valTotal){
    //Imprime valor das colunas do inimigo  
    const elementoValoresSomados = document.getElementById(valSoma);
    elementoValoresSomados.innerHTML = `${colAlvo[0]} ${colAlvo[1]} ${colAlvo[2]}`;
    //Imprime valor total do inimigo
    const elementoValorTotal = document.getElementById(valTotal);
    elementoValorTotal.innerHTML = `${colAlvo[0]+colAlvo[1]+colAlvo[2]}`;
}


function deletaDado(celInimigo,indice,valInimigo,valMeu,colInimigo){
    //Começo da ideia de como deletar dados
    let armazenaNegativo = [0,0,0];
    //Coluna 1
    if  ((indice===0) || (indice===3) || (indice===6)){
        if  (valMeu[indice]===valInimigo[0]){
        for (const i of dados){
        celInimigo[0].classList.remove(i);
    }
        armazenaNegativo[0]+= valMeu[indice];
        valInimigo[0]=0;
        celInimigo[0].addEventListener('click', clicarColuna, {once: true});
}
    if  (valMeu[indice]===valInimigo[3]){
        for (const i of dados){
        celInimigo[3].classList.remove(i);    
    }
        armazenaNegativo[0]+= valMeu[indice];
        valInimigo[3]=0;
        celInimigo[3].addEventListener('click', clicarColuna, {once: true});
}
    if  (valMeu[indice]===valInimigo[6]){
        for (const i of dados){
            celInimigo[6].classList.remove(i);         
        }
            armazenaNegativo[0]+= valMeu[indice];
            valInimigo[6]=0;
            celInimigo[6].addEventListener('click', clicarColuna, {once: true});
        }
        if((valInimigo[0]!=0 && valInimigo[3]!=0) || (valInimigo[0]!=0 && valInimigo[6]!=0) || (valInimigo[3]!=0 && valInimigo[6]!=0)){
            if ((valInimigo[0]===valInimigo[3]) || (valInimigo[0]===valInimigo[6]) || (valInimigo[3]===valInimigo[6])){
                armazenaNegativo[0]*=2;
            }
            if ((valInimigo[0] === valInimigo[3]) && (valInimigo[3] === valInimigo[6])){
                armazenaNegativo[0]/=2;
                armazenaNegativo[0]*=3;
            }
        }
    }

        //Coluna 2
        if  ((indice===1) || (indice===4) || (indice===7)){
            if  (valMeu[indice]===valInimigo[1]){
                for (const i of dados){
                celInimigo[1].classList.remove(i);    
            }
                armazenaNegativo[1]+= valMeu[indice];
                valInimigo[1]=0;
                celInimigo[1].addEventListener('click', clicarColuna, {once: true});
        }
            if  (valMeu[indice]===valInimigo[4]){
                for (const i of dados){
                celInimigo[4].classList.remove(i);    
            }
                armazenaNegativo[1]+= valMeu[indice];
                valInimigo[4]=0;
                celInimigo[4].addEventListener('click', clicarColuna, {once: true});
        }
            if  (valMeu[indice]===valInimigo[7]){
                for (const i of dados){
                celInimigo[7].classList.remove(i);    
            }
                armazenaNegativo[1]+= valMeu[indice];
                valInimigo[7]=0;
                celInimigo[7].addEventListener('click', clicarColuna, {once: true});
        }
        if((valInimigo[1]!=0 && valInimigo[4]!=0) || (valInimigo[1]!=0 && valInimigo[7]!=0) || (valInimigo[4]!=0 && valInimigo[7]!=0)){
            if ((valInimigo[1]===valInimigo[4]) || (valInimigo[1]===valInimigo[7]) || (valInimigo[4]===valInimigo[7])){
                armazenaNegativo[1]*=2;
            }
            if ((valInimigo[1] === valInimigo[4]) && (valInimigo[4] === valInimigo[7])){
                armazenaNegativo[1]/=2;
                armazenaNegativo[1]*=3;
            }
        }
    }

        //Coluna 3
            if  ((indice===2) || (indice===5) || (indice===8)){
                if  (valMeu[indice]===valInimigo[2]){
                    for (const i of dados){
                    celInimigo[2].classList.remove(i);    
                }
                armazenaNegativo[2]+= valMeu[indice];
                valInimigo[2]=0;
                celInimigo[2].addEventListener('click', clicarColuna, {once: true});
            }
            if  (valMeu[indice]===valInimigo[5]){
                for (const i of dados){
                celInimigo[5].classList.remove(i);    
            }
                armazenaNegativo[2]+= valMeu[indice];
                valInimigo[5]=0;
                celInimigo[5].addEventListener('click', clicarColuna, {once: true});
        }
            if  (valMeu[indice]===valInimigo[8]){
                for (const i of dados){
                celInimigo[8].classList.remove(i);    
            }
                armazenaNegativo[2]+= valMeu[indice];
                valInimigo[8]=0;
                celInimigo[8].addEventListener('click', clicarColuna, {once: true});
    }           
    if((valInimigo[2]!=0 && valInimigo[5]!=0) || (valInimigo[2]!=0 && valInimigo[8]!=0) || (valInimigo[5]!=0 && valInimigo[8]!=0)){
        
        if ((valInimigo[2]===valInimigo[5]) || (valInimigo[2]===valInimigo[8]) || (valInimigo[5]===valInimigo[8])){
            armazenaNegativo[2]*=2;
        }
        if ((valInimigo[2] === valInimigo[5]) && (valInimigo[5] === valInimigo[8])){
            armazenaNegativo[2]/=2;
            armazenaNegativo[2]*=3;
        }
    }
}
    if(armazenaNegativo[0]>0 || armazenaNegativo[1]>0 || armazenaNegativo[2]>0){
        //Imprime valor das colunas do inimigo atualizado
        colInimigo[0]-=armazenaNegativo[0];
        colInimigo[1]-=armazenaNegativo[1];
        colInimigo[2]-=armazenaNegativo[2];
    }
}



// Definição da função que troca a classe do dado
function trocaClasse(d){
    for (const i of dados){
        tabuleiro.classList.remove(i);
    }
    tabuleiro.classList.add(dados[prox-1]);

}

const clicarColuna = (x) => {
    //Deleta dado do bot
    const cell = x.target;
    let dadoSerAdicionado = prox;
    addDado(cell,dadoSerAdicionado);

    verifValor(x);
    for(var i=0; i<9; i++){
        if(cell===celulas[i]){
            deletaDado(celulas2,i,valorCell2,valorCell,coluna2);    
        }
    }
    
    dadoCanto.innerHTML = dadoCanto.classList.remove(dados[prox-1]);
    
    //Verificação fim de jogo player
    const acabou = endGame("d1","d2","d3","d4","d5","d6",celulas);
    
    if (acabou === true){
        const totalPlayer = coluna[0] + coluna[1] + coluna[2];
        const totalBot = coluna2[0] + coluna2[1] + coluna2[2];
        if(totalPlayer>totalBot){msgVitoria.innerText = "Player venceu!";}
        else if(totalPlayer<totalBot){msgVitoria.innerText = "Bot venceu!";}
        else{msgVitoria.innerText = "Empatou, como pode?";}

       var mostrarModal = true;
       if(mostrarModal)
       {
        var modal = document.getElementById('modal-win');
        modal.style.display = 'block';
       }
    }

    //Verifica presença de dado e calcula valor de cada coluna
    botJoga();
    imprimeValor(coluna2,'valoresSomados2','valorTotal2');
    imprimeValor(coluna,'valoresSomados','valorTotal');
    for (let i = 0; i<3; i++){console.log(coluna[i]);}
    getProx();
    dadoCanto.innerHTML = dadoCanto.classList.add(dados[prox-1]); 

    //Troca classe
    trocaClasse(dadoSerAdicionado);  

    // Verificação fim de Jogo bot
    const acabouBot = endGame("d1","d2","d3","d4","d5","d6", celulas2);
 
    if (acabouBot === true){
        const totalPlayer = coluna[0] + coluna[1] + coluna[2];
        const totalBot = coluna2[0] + coluna2[1] + coluna2[2];
        if(totalPlayer>totalBot){msgVitoria.innerText = "Player venceu!";}
        else if(totalPlayer<totalBot){msgVitoria.innerText = "Bot venceu!";}
        else{msgVitoria.innerText = "Empatou, como pode?";}

       var mostrarModal = true;
       if(mostrarModal)
       {
        var modal = document.getElementById('modal-win');
        modal.style.display = 'block';
       }
    }
}

//Começa o jogo
startGame();

export {intervaloNumRandom,dados,valorMin,valorMax,getProx,prox,addDado,deletaDado,imprimeValor};