/* FUNÇÕES ANÔNIMAS */

(function(){
    console.log("Oii");
})();

const anonima = function(num) {console.log("Executou", num)};
// Executa a função anônima
anonima(10);

const funcaoAnonima = function(number1) {
    return function (number2) {
        console.log(number1 + number2);
    };
};

// Salva na variável closule a função que manda o parâmetro number1
const closule = funcaoAnonima(10);
// Manda o parâmetro number2 e executa a função final
closule(10);

// Recursividade

const fibonacci = function(num) {
    if (num === 1 || num === 2) {
        return 1;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
};

console.log("Fibonacci :>>", Fibonacci(10));