# Função Arrow
Nesse modulo falaremos brevemente sobre as Arrow Fuctions, ou melhor dizendo (funções de seta).
---
### Definição

Arrow Fuctions são basicamente uma nova forma de criar funções no **Javascript**, de tal maneira com que essas funções fiquem mais curtas e mais poderosas ao memso tempo. 

Elas foram introduzidas nas especificações ES6 (*ECMAScript 2015*), com o intuito de fornecer uma sintaxe mais enxuta para a criação de funções anônimas. 

A principal característica das arrow functions é que elas herdam o contexto do valor "this" do escopo ao qual estão inseridas, ao contrário das funções tradicionais.

### Exemplos 


Metodo tradicional, Codigo em JavaScript:
``` javaScript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtraPares(array) {
  return array.filter(function(numero) {
    return numero % 2 === 0;
  });
}

const pares = filtraPares(numeros);
console.log(pares); // Saída: [2, 4, 6, 8, 10]
```


Metodo usando Arrow Functions, Codigo em JavaScript:
``` javaScript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filtraPares = array => array.filter(numero => numero % 2 === 0);

const pares = filtraPares(numeros);
console.log(pares); // Saída: [2, 4, 6, 8, 10]
```

Como podemos observar, acabamos de economizar algumas linhas de codigo, otimizando o programa e deixando a função mais poderosa. Entretanto, cuidado, não são em todos os casos que o uso de arrow functions são indicados.

Nesse exemplo, a função tradicional "filtraPares" recebe um array e usa o método .filter() com uma função anônima para retornar um novo array contendo apenas os números pares. Na versão com arrow function, a sintaxe é mais concisa e não é necessário usar a palavra-chave "function", tornando o código mais enxuto. Além disso, as arrow functions herdam automaticamente o contexto do "this" do escopo em que estão definidas, o que pode ser útil em certos casos.


