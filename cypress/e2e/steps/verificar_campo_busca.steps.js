import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Passo 1: Acessar a página inicial
Given('o usuário está na página inicial do gov.br', () => {
  cy.visit('https://www.gov.br/pt-br');
});

// Passo 2: Procurar pelo campo de busca
When('ele procurar pelo campo de busca', () => {
  cy.get('input[type="search"]').should('be.visible'); // Ajuste o seletor conforme necessário
});

// Passo 3: Verificar se o campo de busca está visível
Then('ele deve ver o campo de busca visível', () => {
  cy.get('input[type="search"]').should('be.visible');
});
