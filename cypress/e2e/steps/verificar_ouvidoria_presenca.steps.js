/// <reference types="cypress" />
import { Given, Then } from "cypress-cucumber-preprocessor/steps";

// Passo 1: Garantir que o usuário está na página inicial do gov.br
Given('o usuário está na página inicial do gov.br', () => {
  cy.visit('https://www.gov.br/pt-br');
});

// Passo 2: Verificar se a opção "Denúncia" está visível
Then('ele deve ver a opção "Denúncia" na ouvidoria', () => {
  cy.get('#bf1d4e45-75d1-45ed-aeeb-13240c9bb1c2 > div > ul > li:nth-child(1) > a')
    .should('be.visible');
});

// Passo 3: Verificar se a opção "Solicitação" está visível
Then('ele deve ver a opção "Solicitação" na ouvidoria', () => {
  cy.get('#bf1d4e45-75d1-45ed-aeeb-13240c9bb1c2 > div > ul > li:nth-child(2) > a')
    .should('be.visible');
});

// Passo 4: Verificar se a opção "Elogio" está visível
Then('ele deve ver a opção "Elogio" na ouvidoria', () => {
  cy.get('#bf1d4e45-75d1-45ed-aeeb-13240c9bb1c2 > div > ul > li:nth-child(3) > a')
    .should('be.visible');
});

// Passo 5: Verificar se a opção "Reclamação" está visível
Then('ele deve ver a opção "Reclamação" na ouvidoria', () => {
  cy.get('#bf1d4e45-75d1-45ed-aeeb-13240c9bb1c2 > div > ul > li:nth-child(4) > a')
    .should('be.visible');
});
