Feature: Verificar a página de serviços do gov.br

  Scenario: Verificar se a opção "Serviços" aparece no menu lateral
    Given o usuário está na página inicial do gov.br
    When ele clicar no menu lateral
    Then ele deve ver a opção "Serviços" no menu
