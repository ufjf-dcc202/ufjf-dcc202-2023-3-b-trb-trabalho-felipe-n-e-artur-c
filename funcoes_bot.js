
//Função que calcula valor do bot, em breve vai ser uma só pra player e bot
const valorBot = () =>{
    //Coluna 1
    coluna2[0] = valorCell2[0] + valorCell2[3] + valorCell2[6];
    //Verificação de iguais
        if(valorCell2[0] === valorCell2[3] || valorCell2[0] === valorCell2[6] || valorCell2[3] === valorCell2[6]){
            if(valorCell2[0] === valorCell2[3]) {coluna2[0] = 2*valorCell2[0] + 2*valorCell2[3] + valorCell2[6];}
            if(valorCell2[0] === valorCell2[6]) {coluna2[0] = 2*valorCell2[0] + 2*valorCell2[6] + valorCell2[3];}
            if(valorCell2[3] === valorCell2[6]) {coluna2[0] = 2*valorCell2[3] + 2*valorCell2[6] + valorCell2[0];}
        }
        if (valorCell2[0] === valorCell2[3] && valorCell2[3] === valorCell2[6]){
            coluna2[0] = 3*valorCell2[0] + 3*valorCell2[3] + 3*valorCell2[6];
        }

    //Coluna 2
    coluna2[1] = valorCell2[1] + valorCell2[4] + valorCell2[7];
    //Verificação de iguais
    if(valorCell2[1] === valorCell2[4] || valorCell2[1] === valorCell2[7] || valorCell2[4] === valorCell2[7]){
        if(valorCell2[1] === valorCell2[4]) {coluna2[1] = 2*valorCell2[1] + 2*valorCell2[4] + valorCell2[7];}
            if(valorCell2[1] === valorCell2[7]) {coluna2[1] = 2*valorCell2[1] + 2*valorCell2[7] + valorCell2[4];}
            if(valorCell2[4] === valorCell2[7]) {coluna2[1] = 2*valorCell2[4] + 2*valorCell2[7] + valorCell2[1];}
    }  
    if (valorCell2[1] === valorCell2[4] && valorCell2[4] === valorCell2[7]){
        coluna2[1] = 3*valorCell2[1] + 3*valorCell2[4] + 3*valorCell2[7];
    }

    //Coluna 3
    coluna2[2] = valorCell2[2] + valorCell2[5] + valorCell2[8]; 
    //Verificação de iguais
        if(valorCell2[2] === valorCell2[5] || valorCell2[2] === valorCell2[8] || valorCell2[5] === valorCell2[8]){
            if(valorCell2[2] === valorCell2[5]) {coluna2[2] = 2*valorCell2[2] + 2*valorCell2[5] + valorCell2[8];}
            if(valorCell2[2] === valorCell2[8]) {coluna2[2] = 2*valorCell2[2] + 2*valorCell2[8] + valorCell2[5];}
            if(valorCell2[5] === valorCell2[8]) {coluna2[2] = 2*valorCell2[5] + 2*valorCell2[8] + valorCell2[2];}
        }
        if (valorCell2[2] === valorCell2[5] && valorCell2[5] === valorCell2[8]){
            coluna2[2] = 3*valorCell2[2] + 3*valorCell2[5] + 3*valorCell2[8];
        }

        //TEMPORÁRIO!
    //Imprime valor de cada coluna
    const elementoValoresSomados2 = document.getElementById('valoresSomados2');
    elementoValoresSomados2.innerHTML = `${coluna2[0]} ${coluna2[1]} ${coluna2[2]}`;
    //Imprime valor total
    const elementoValorTotal2 = document.getElementById('valorTotal2');
    elementoValorTotal2.innerHTML = `${coluna2[0] + coluna2[1] + coluna2[2]}`;
    }
