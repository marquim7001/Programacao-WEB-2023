//inicializando as 2 matrizes
let matrizA = Array(2);
matrizA[0] = [1,3];
matrizA[1] = [2,5];

let matrizB = Array(2);
matrizB[0] = [2,2];
matrizB[1] = [0,1];

//auxiliares
let i, j, k;

if (matrizA[0].length != matrizB.length){
    console.log("Não é possível calcular");
} else {
    let matrizC = Array(matrizA.length);

    for(i=0;i<matrizC.length;i++){

        matrizC[i] = Array(matrizB[0].length);
        for(j=0;j<matrizB[0].length;j++){

            matrizC[i][j] = 0;
            for(k=0;k<matrizA[0].length;k++){
                matrizC[i][j] += matrizA[i][k]*matrizB[k][j];
            }
        }
    }

    //printando a multiplicação das matrizes
    for(i=0;i<matrizC.length;i++){
        console.log(matrizC[i]);
    }

    let matrizForm = Array(matrizC.length);
    for(i=0;i<matrizC.length;i++){
        matrizForm[i] = Array(matrizC[i].length);
        for(j=0;j<matrizC[i].length;j++){
            let formulaMultiplicacao = '';
            for(k=0;k<matrizA[0].length;k++){
                formulaMultiplicacao+=`${matrizA[i][k]} x ${matrizB[k][j]}`;
                if(k<matrizA[0].length - 1){
                    formulaMultiplicacao+= ' + ';
                }
            }
            matrizForm[i][j]=formulaMultiplicacao;
        }
    }

    for(i=0;i<matrizForm.length;i++){
        console.log(matrizForm[i]);
    }
}

