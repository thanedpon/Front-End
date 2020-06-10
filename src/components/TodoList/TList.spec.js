

describe('Test ToDoList', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/TodoList')
    })


    it('Enter Text', () => {
       const input = "Monday";
       const input1 = "tuesday"
       cy.get('input').type(input).should('have.value', input)
       cy.get('#todo-form > button').click()
       cy.get('input').type(input1).should('have.value', input1)
       cy.get('#todo-form > button').click()
        cy.get(':nth-child(1) > p').contains(input)
        cy.get(':nth-child(2) > p').contains(input1)
        cy.wait(500)
        cy.get(':nth-child(2) > p > span > .faicons').click()   // button delete
        
    })
})