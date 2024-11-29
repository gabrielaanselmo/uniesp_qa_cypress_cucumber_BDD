// ***********************************************
// Este código irá impedir que o Cypress falhe o teste
// quando o erro "$ is not defined" for detectado.
// ***********************************************

Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignorar erros que contenham a mensagem "$ is not defined"
    if (err.message.includes('$ is not defined')) {
      return false; // Ignora o erro e não falha o teste
    }
    // Permite que outros erros sejam tratados normalmente
    return true;
  });  