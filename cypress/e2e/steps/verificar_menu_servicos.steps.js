/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Passo 1: Garantir que o usuário está na página inicial do gov.br
Given('o usuário está na página inicial do gov.br', () => {
  cy.visit('https://www.gov.br/pt-br');
});

// Passo 2: Clicar no menu lateral (ícone de barras)
When('ele clicar no menu lateral', () => {
  // Clica no ícone de menu (ícone de barras)
  cy.get('#site-header > div.main > div > div > a > span.fa.fa-bars').click();
});

// Passo 3: Verificar se a opção "Serviços" está visível
Then('ele deve ver a opção "Serviços" no menu', () => {
  // Verifica se o link "Serviços" está visível no menu após clicar no ícone
  cy.get('#main-navigation > ul > li:nth-child(1) > a').should('be.visible');
});
