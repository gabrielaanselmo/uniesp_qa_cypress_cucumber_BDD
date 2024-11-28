Feature: Verificar a presença dos blocos de Ouvidoria no gov.br

  Scenario: Verificar se as opções de Denúncia, Solicitação, Elogio e Reclamação estão visíveis
    Given o usuário está na página inicial do gov.br
    Then ele deve ver a opção "Denúncia" na ouvidoria
    And ele deve ver a opção "Solicitação" na ouvidoria
    And ele deve ver a opção "Elogio" na ouvidoria
    And ele deve ver a opção "Reclamação" na ouvidoria
