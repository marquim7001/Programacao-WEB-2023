function somar(a,b){ // chamando funçao basica de soma 
    if(b== undefined){
        return "NAO É POSSIVRL SOMAR";
    }
    return a+b;

}

// funçao recursiva 
function contarAten(n){
    if(n> -10){ // criterio de parada 
    
        console.log(n);
        contarAten(n-1);
    }

}

contarAten(5);

const calculadora = {
    somar (a,b){
        return a+b;
    },
    subtrair: function(a,b){
        return a-b;
    }

}
console.log(calculadora.subtrair (1,3));