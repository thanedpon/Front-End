describe('The Login Page', () => {
    it('successfully loads', () => {
        const email = 'tha@hotmail.com';
        const password = '123456';
        cy.visit('http://localhost:3000')


        cy.get('input[name=email]').type(email)
        cy.get('input[name=password]').type(password)

        cy.get('#LoginSubmit').click()
        cy.url().should('include', '/Homepage')

    })
})