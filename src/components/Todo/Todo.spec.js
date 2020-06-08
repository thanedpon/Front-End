describe('Test TodoList', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/Todo')
    })

    it('accept input Todo', () => {
        const input = "Monday"

        cy.get('input[name=text]').type(input).should('have.value', input)
        cy.get('#Submit').click()
    })
})