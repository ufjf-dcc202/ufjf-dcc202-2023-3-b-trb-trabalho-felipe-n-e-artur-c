import{dados,verifValor,getProx,botJoga,endGame,coluna} from "./main.js";

const tabuleiro = document.querySelector("[data-board]");
const dadoCanto = document.querySelector("[data-cel");



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


    // Fim de Jogo, WIP
    const acabou = endGame("d1","d2","d3","d4","d5","d6");
    if (acabou === true){
        console.log('acabou rs');
        
    }
}

//Função que deleta dados, WIP
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

        //Imprime valor das colunas do inimigo, TEMPORÁRIO  
        const elementoValoresSomados = document.getElementById('valoresSomados');
        elementoValoresSomados.innerHTML = `${coluna[0]-armazenaNegativo[0]} ${coluna[1]-armazenaNegativo[1]} ${coluna[2]-armazenaNegativo[2]}`;
        //Imprime valor total do inimigo, TEMPORÁRIO
        const elementoValorTotal = document.getElementById('valorTotal');
        elementoValorTotal.innerHTML = `${coluna[0]-armazenaNegativo[0]+coluna[1]-armazenaNegativo[1]+coluna[2]-armazenaNegativo[2]}`;    
    }

    export{trocaClasse,clicarColuna,deletaDado};