import {prox} from "./bugalha.js";

const celulas = document.querySelectorAll("[data-cell]");

let valorCell = [0,0,0,0,0,0,0,0,0];
let coluna = [0,0,0];

const verifValor = (x) => {
    //Adicionando valor a cada célula individual
    for(let i=0; i<9; i++){
        if (x.target === celulas[i]){
            valorCell[i] += prox; 
        }
    }

    if(x.target === celulas[0] || x.target === celulas[3] || x.target === celulas[6]){
        coluna[0] = valorCell[0] + valorCell[3] + valorCell[6];
        //Verificação de iguais
            if(valorCell[0] === valorCell[3] || valorCell[0] === valorCell[6] || valorCell[3] === valorCell[6]){
                if(valorCell[0] === valorCell[3]) {coluna[0] = 2*valorCell[0] + 2*valorCell[3] + valorCell[6];}
                if(valorCell[0] === valorCell[6]) {coluna[0] = 2*valorCell[0] + 2*valorCell[6] + valorCell[3];}
                if(valorCell[3] === valorCell[6]) {coluna[0] = 2*valorCell[3] + 2*valorCell[6] + valorCell[0];}
            }
            if (valorCell[0] === valorCell[3] && valorCell[3] === valorCell[6]){
                coluna[0] = 3*valorCell[0] + 3*valorCell[3] + 3*valorCell[6];
            }
    }

    if(x.target === celulas[1] || x.target === celulas[4] || x.target === celulas[7]){
        coluna[1] = valorCell[1] + valorCell[4] + valorCell[7];

        if(valorCell[1] === valorCell[4] || valorCell[1] === valorCell[7] || valorCell[4] === valorCell[7]){
            if(valorCell[1] === valorCell[4]) {coluna[1] = 2*valorCell[1] + 2*valorCell[4] + valorCell[7];}
                if(valorCell[1] === valorCell[7]) {coluna[1] = 2*valorCell[1] + 2*valorCell[7] + valorCell[4];}
                if(valorCell[4] === valorCell[7]) {coluna[1] = 2*valorCell[4] + 2*valorCell[7] + valorCell[1];}
        }  
        if (valorCell[1] === valorCell[4] && valorCell[4] === valorCell[7]){
            coluna[1] = 3*valorCell[1] + 3*valorCell[4] + 3*valorCell[7];
        }
}

    if(x.target === celulas[2] || x.target === celulas[5] || x.target === celulas[8]){
        coluna[2] = valorCell[2] + valorCell[5] + valorCell[8]; 
        
            if(valorCell[2] === valorCell[5] || valorCell[2] === valorCell[8] || valorCell[5] === valorCell[8]){
                if(valorCell[2] === valorCell[5]) {coluna[2] = 2*valorCell[2] + 2*valorCell[5] + valorCell[8];}
                if(valorCell[2] === valorCell[8]) {coluna[2] = 2*valorCell[2] + 2*valorCell[8] + valorCell[5];}
                if(valorCell[5] === valorCell[8]) {coluna[2] = 2*valorCell[5] + 2*valorCell[8] + valorCell[2];}
            }
            if (valorCell[2] === valorCell[5] && valorCell[5] === valorCell[8]){
                coluna[2] = 3*valorCell[2] + 3*valorCell[5] + 3*valorCell[8];
            }  
    }
}

export {celulas,valorCell,coluna,verifValor};

