function soma(n1, n2) {
    return Number.parseInt(n1) + Number.parseInt(n2);
  }

function subtracao(n1, n2) {
    return Number.parseInt(n1) - Number.parseInt(n2);
  }
  
  function multiplicacao(n1, n2) {
    return Number.parseInt(n1) * Number.parseInt(n2);
  }
  
  function divisao(n1, n2) {
    if (n2 === 0) {
      return 'Divisão por zero não é permitida';
    }
    return Number.parseInt(n1) / Number.parseInt(n2);
  }

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao,
};