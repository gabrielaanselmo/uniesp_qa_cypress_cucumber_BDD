# Testes Automatizados - gov.br com Cypress e Cucumber 🚀

Este repositório contém **testes automatizados** para o site **gov.br** utilizando **Cypress** e **Cucumber BDD**.

## Tecnologias Utilizadas 🛠️

- **Cypress**: Framework de testes de integração end-to-end 🧪.
- **Cucumber**: Framework BDD (Behavior-Driven Development) para testes em Gherkin 📜.

## Cenários de Teste 📝

Este repositório contém testes automatizados que simulam a interação de um usuário com a página inicial do site **gov.br**. 

### 1. **Verificar o fluxo de atendimento no GOV.BR** 🧑‍💻

**Objetivo**: Testar o fluxo de atendimento no site gov.br, verificando o redirecionamento e o acesso ao formulário de atendimento.

- **Cenário**: O usuário acessa a página de atendimento, clica em "Falar com atendente" e verifica o formulário
  - **Dado** que o usuário está na página inicial do gov.br
  - **Quando** ele clicar no botão "Atendimento GOV.BR"
  - **Então** ele deve ser redirecionado para a página de atendimento
  - **E** ele deve ver o botão "Falar com atendente"
  - **Quando** ele clicar no botão "Falar com atendente"
  - **Então** ele deve ver o formulário de atendimento

---

### 2. **Verificar a presença do campo de busca** 🔍

**Objetivo**: Verificar se o campo de busca está visível na página inicial.

- **Cenário**: O campo de busca deve estar visível na página inicial
  - **Dado** que o usuário está na página inicial do gov.br
  - **Quando** ele procurar pelo campo de busca
  - **Então** ele deve ver o campo de busca visível

---

### 3. **Verificar a página de serviços do gov.br** 📋

**Objetivo**: Verificar se a opção "Serviços" está presente no menu lateral.

- **Cenário**: Verificar se a opção "Serviços" aparece no menu lateral
  - **Dado** que o usuário está na página inicial do gov.br
  - **Quando** ele clicar no menu lateral
  - **Então** ele deve ver a opção "Serviços" no menu

---

### 4. **Verificar a presença dos blocos de Ouvidoria no gov.br** 📝

**Objetivo**: Verificar se as opções de Ouvidoria (Denúncia, Solicitação, Elogio, Reclamação) estão visíveis na página.

- **Cenário**: Verificar se as opções de Denúncia, Solicitação, Elogio e Reclamação estão visíveis
  - **Dado** que o usuário está na página inicial do gov.br
  - **Então** ele deve ver a opção "Denúncia" na ouvidoria
  - **E** ele deve ver a opção "Solicitação" na ouvidoria
  - **E** ele deve ver a opção "Elogio" na ouvidoria
  - **E** ele deve ver a opção "Reclamação" na ouvidoria
