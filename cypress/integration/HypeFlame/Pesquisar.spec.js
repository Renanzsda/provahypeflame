/// <reference types="cypress" />

describe('Pesquisar do site Hype Flame', () => {
    beforeEach(() => {

      cy.visit('https://hypeflame.blog/')
    })

    it('Clicar no botão pesquisar', () => {
        // Dado que Usuario deseja realizar uma pesquisa
        // Quando clicar no botao de pesquisa representado por uma lupa
        // Entao abrir uma tela de pesquisa
        cy.get('#header-search > .svg-icon > circle').click()
    })

    it('Pesquisar uma palavra existente', () => {
        // Dado que Usuario deseja realizar uma pesquisa
        // Quando clicar no botao de pesquisa representado por uma lupa
        // Entao abrir uma tela de pesquisa
        // E informar a palavra "Spring"
        // Então clicar no botão de pesquisar
        cy.get('#header-search > .svg-icon > circle').click()
        cy.get('#search-form-61101800d7937').type("Spring")
        cy.get('.submit').click()
        cy.get('.page-header').should('contain', 'Resultados da busca por: Spring')
    })

    it('Pesquisar uma palavra inexistente', () => {
        // Dado que Usuario deseja realizar uma pesquisa
        // Quando clicar no botao de pesquisa representado por uma lupa
        // Entao abrir uma tela de pesquisa
        // E informar a palavra "Teste"
        // Então clicar no botão de pesquisar
        cy.get('#header-search > .svg-icon > circle').click()
        cy.get('#search-form-61101800d7937').type("Bolinho")
        cy.get('.submit').click()
        cy.get('.page-title').should('contain', 'Nenhum resultado')
        cy.get('.archive-description > p').should('contain','Não encontramos nada para estes termos de busca. Tente novamente com palavras-chave diferentes.')
    })

})
