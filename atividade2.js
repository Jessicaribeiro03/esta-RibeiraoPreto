//Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

function quantLetrasA(texto) {
   
    let contador = 0;
  
    
    const textoMinusculo = texto.toLowerCase();
  
    // Percorre cada caractere do texto
    for (let i = 0; i < textoMinusculo.length; i++) {
      if (textoMinusculo[i] === 'a') {
        contador++;
      }
    }
  
    return contador;
  }
  
  const texto = prompt("Digite um texto:");
  
  
  const quantidade = contarLetrasA(texto);
  
  if (quantidadeletras > 0) {
    console.log(`A letra 'a' aparece ${quantidade} vezes no texto.`);
  } else {
    console.log("A letra 'a' não foi encontrada no texto.");
  }
