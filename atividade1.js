//1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function numeroFibonacci(numero) {
    let a = 0;
    let b = 1;
  
    while (a <= numero) {
      if (a === numero) {
        return true;
      }
      let seq = a;
      a = b;
      b = seq + b;
    }
  
    return false;
  }
  
  // Solicita o número ao usuário
  const numero = parseInt(prompt("Digite um número:"));
  
  // Verifica se o número pertence à sequência
  if (numeroFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
  }