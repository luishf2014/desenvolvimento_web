// Para obtér a entrada do usuário.
console.log('digite um texto usando o exemplo abaixo');
console.log('       "Ola LuIs TUDo beM"');
const userInput = prompt('Digite um texto:');

// PAra converter para minúsculas e para substituir espaços por underline.
const snakeCaseText = userInput.toLowerCase().replace(/\s+/g, '_');

// Para exibe o resultado na tela.
console.log(snakeCaseText);

  