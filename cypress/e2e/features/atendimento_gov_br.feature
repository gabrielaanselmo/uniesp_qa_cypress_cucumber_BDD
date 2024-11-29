Feature: Verificar o fluxo de atendimento no GOV.BR

  Scenario: O usuário acessa a página de atendimento, clica em "Falar com atendente" e verifica o formulário
    Given o usuário está na página inicial do gov.br
    When ele clicar no botão "Atendimento GOV.BR"
    Then ele deve ser redirecionado para a página de atendimento
    And ele deve ver o botão "Falar com atendente"
    When ele clicar no botão "Falar com atendente"
    Then ele deve ver o formulário de atendimento
