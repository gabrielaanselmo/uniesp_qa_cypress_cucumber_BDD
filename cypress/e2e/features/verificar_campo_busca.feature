Feature: Verificar a presença do campo de busca

  Scenario: O campo de busca deve estar visível na página inicial
    Given o usuário está na página inicial do gov.br
    When ele procurar pelo campo de busca
    Then ele deve ver o campo de busca visível
