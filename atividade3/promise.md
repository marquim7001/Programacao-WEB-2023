# Promise
Nesse modulo veremos o Promise, objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.
---
### Definição

As Promises foram introduzidas para lidar de forma mais eficiente com tarefas assíncronas e para ajudar a evitar problemas comuns associados à chamada "callback hell" (aninhamento excessivo de funções de retorno de chamada).

Operações assíncronas são aquelas que não bloqueiam a execução do código enquanto estão sendo processadas, permitindo que outras tarefas continuem a ser executadas simultaneamente.

### Justificativa de criação: 
- Legibilidade: código mais legível e organizado, visto que as operações assíncronas e seus tratamentos são declarados sequencialmente.

- Tratamento de erros: A capacidade de encadear métodos .catch() facilita a manipulação de erros em uma única parte do código, em vez de espalhá-los por várias funções de retorno de chamada aninhadas.

- Evitar callback hell: As Promises ajudam a evitar a complexidade e a dificuldade de manutenção causadas pelo aninhamento excessivo de callbacks.

- Encadeamento de operações assíncronas: As Promises permitem o encadeamento fácil de várias operações assíncronas, tornando mais claro o fluxo de controle assíncrono.

- Compatibilidade com async/await: As Promises formam a base para a funcionalidade async/await introduzida posteriormente, tornando ainda mais conveniente escrever código assíncrono de maneira síncrona.

### Estados de uma Promise
1. Pendente (Pending): O estado inicial quando uma Promise é criada. Isso significa que a operação ainda não foi concluída ou rejeitada.

2. Realizada (Fulfilled): Nesse estado, a operação assíncrona foi concluída com sucesso e os dados resultantes estão disponíveis.

3. Rejeitada (Rejected): Caso a operação assíncrona falhe, a Promise entrará neste estado, carregando informações sobre o motivo da falha.

### Exemplos 


Exemplo simples usando Promise, Codigo em JavaScript:
``` javaScript
const minhaPromise = new Promise((resolve, reject) => {
    // Aqui, você executa a operação assíncrona.
    // Se a operação for bem-sucedida, chame resolve(resultados).
    // Se a operação falhar, chame reject(motivo).
});
```
Exemplo mais complexo usando Promise, Codigo em JavaScript:
``` javaScript
function moerCafe() {
    return new Promise((resolve, reject) => {
        console.log("cafe sendo moido...");
        setTimeout(() => {
            resolve("Café moído");
        }, 1000);
    });
}

// Função simulando o processo de ferver água
function ferverAgua() {
    return new Promise((resolve, reject) => {
        console.log("Fervendo água...");
        setTimeout(() => {
            resolve("Água quente");
        }, 2000);
    });
}

// Função que mistura o café moído com a água quente
function misturarCafeComAgua(cafe, agua) {
    return new Promise((resolve, reject) => {
        console.log(`Misturando ${cafe} com ${agua}`);
        setTimeout(() => {
            resolve("Café pronto!");
        }, 1500);
    });
}

// Função que simula todo o processo de fazer café usando Promises
function fazerCafe() {
    moerCafe()
        .then(cafeMoido => {
            return ferverAgua().then(aguaQuente => {
                return misturarCafeComAgua(cafeMoido, aguaQuente);
            });
        })
        .then(cafePronto => {
            console.log(cafePronto);
        })
        .catch(erro => {
            console.error("Algo deu errado:", erro);
        });
}

// Chama a função para fazer café
fazerCafe();

```