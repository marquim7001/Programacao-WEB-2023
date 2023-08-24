//inicializando a matriz
let matriz = Array(3);
matriz[0] = [1,2];
matriz[1] = [3,4];
matriz[2] = [5,6];

let i, j;

for(i=0;i<matriz.length;i++){
    console.log(matriz[i]);
}

let matrizT = Array(matriz[0].length);

//calculando a transposta
for(i=0;i<matrizT.length;i++){
    //criando novas linhas como array de acordo com o número de colunas da matriz inicial
    matrizT[i] = Array(matriz.length);
    for(j=0;j<matriz.length;j++){
        //preenchendo cada célula da transposta, que seria a troca da linha por coluna, conceito de matriz transposta
        matrizT[i][j] = matriz[j][i];
    }
}

for(i=0;i<matrizT.length;i++){
    console.log(matrizT[i]);
}