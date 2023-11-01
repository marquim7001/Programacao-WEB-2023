const calculadora = require('../calculadora/calculadora');

function indexView(req, res) {
    res.render('index.html');
};

function calcular(req, res) {
    const n1 = req.body.n1;
    const n2 = req.body.n2;
    const operador = req.body.operador;


    let resultado;
    switch (operador) {
        case '+':
            resultado = calculadora.soma(n1, n2);
            break;
        case '-':
            resultado = calculadora.subtracao(n1, n2);
            break;
        case '*':
            resultado = calculadora.multiplicacao(n1, n2);
            break;
        case '/':
            resultado = calculadora.divisao(n1, n2);
            break;
        default:
            resultado = 'Operação inválida';
    }

    res.render('resultado.html', { resultado });
}

module.exports = {
    indexView,
    calcular,
};