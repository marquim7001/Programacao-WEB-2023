function somar (a, b){
    return Number.parseInt(a) + Number.parseInt (b);
}

function subtrair (a, b){
    return Number.parseInt(a) - Number.parseInt (b);
}

function dividir (a, b){
    return Number.parseInt(a) /Number.parseInt (b);
}

function multiplicar (a, b){
    return Number.parseInt (a) * Number.parseInt (b);
}


const PI = 3.14;

function imprimirPI(){
    console.log(PI);
}

module.exports = {
    somar,
    sub,
    div,
    multi,
    PI
}
