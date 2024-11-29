import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Passo 1: Acessar a página inicial
Given('o usuário está na página inicial do gov.br', () => {
  cy.visit('https://www.gov.br/governodigital/pt-br', {
    timeout: 10000
  });

  // Tenta fechar o overlay de "primeiro acesso" se estiver presente
  cy.get('#govbr-login-overlay-wrapper', { timeout: 10000 })
    .should('exist')
    .then(($overlay) => {
      if ($overlay.length > 0) {
        cy.wrap($overlay).click({ force: true });
        cy.log('Overlay fechado');
      } else {
        cy.log('Overlay não está visível ou não existe.');
      }
    });

  // Verifica se o botão de aceitar cookies está visível e clica nele
  cy.get('body > div.dsgov > div > div > div > div > div.br-modal-footer.actions > button.br-button.secondary.small.btn-accept', { timeout: 10000 })
    .should('be.visible')
    .click({ force: true });

  // Espera após clicar no botão de cookies
  cy.wait(2000); // Aumente o tempo se necessário
});

// Passo 2: Esperar e clicar no botão "Atendimento GOV.BR"
When('ele clicar no botão "Atendimento GOV.BR"', () => {
  cy.contains('Atendimento GOV.BR', { timeout: 10000 })
    .should('be.visible')
    .click({ force: true });
});

// Passo 3: Verificar redirecionamento para a página de atendimento
Then('ele deve ser redirecionado para a página de atendimento', () => {
  cy.url({ timeout: 10000 }).should('include', 'atendimento-gov.br');
});

// Passo 4: Verificar se o botão "Falar com atendente" está presente
Then('ele deve ver o botão "Falar com atendente"', () => {
  cy.get('#a126b381-b6ed-44f6-be66-292077a09a54 > div > p > button', { timeout: 10000 })
    .scrollIntoView()
    .should('be.visible'); 
});

// Passo 5: Clicar no botão "Falar com atendente"
When('ele clicar no botão "Falar com atendente"', () => {
  cy.get('#a126b381-b6ed-44f6-be66-292077a09a54 > div > p > button', { timeout: 10000 })
    .scrollIntoView()
    .should('be.visible')
    .should('not.be.disabled')
    .click({ force: true, multiple: true });

  // Aguarda o tempo necessário para o formulário carregar
  cy.wait(3000); // Aumente o tempo conforme necessário

  // Verifica se o campo dentro do formulário está visível
  cy.contains('h1', 'Assistente gov.br', { timeout: 15000 })
    .should('be.visible');
});
