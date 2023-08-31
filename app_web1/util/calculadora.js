function somar (a, b){
    return Number.parseInt(a) + Number.parseInt (b);
}

function sub (a, b){
    return a-b;
}

function div (a, b){
    return a/b;
}

function multi (a, b){
    return a*b;
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
