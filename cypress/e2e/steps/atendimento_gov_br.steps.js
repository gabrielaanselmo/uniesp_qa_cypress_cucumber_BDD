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
  cy.contains('button', 'Falar com atendente', { timeout: 10000 })
    .should('be.visible');
});

// Passo 5: Clicar no botão "Falar com atendente"
When('ele clicar no botão "Falar com atendente"', () => {
  cy.contains('button', 'Falar com atendente')
    .click({ force: true });
});

// Passo 6: Verificar se o formulário de atendimento está visível
Then('ele deve ver o formulário de atendimento', () => {
  cy.get('form[aria-label="Identificação do usuário"]')
    .should('be.visible');
});