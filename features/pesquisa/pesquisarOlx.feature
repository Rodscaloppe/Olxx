Feature: Procurar produto no site Olx
  Eu usuario do site
  Realizo uma busca de um produto
  Visualizo os titulos e valores

Background: Entrar no site Olx
  Given Estou no site Olx

  ## Pesquisar
@testes
  Scenario: Realizar uma pesquisa e imprimir os titulos e valores dos 5 primeiros
    When Estou na tela home Olx
    And Realizo uma busca na barra de pesquisa
    Then Eu visualizo os 5 primeiros 


  ## Printscreen
  @testes
  Scenario: Eu realizo uma busca e validando a paginacao 
    When Estou na tela home Olx
    And Realizo uma busca na barra de pesquisa
    And Sou direcionado para proxima pagina
    Then Eu Valido a paginacao

