// import Homepage from './Homepage';
// import { Homepage } from './Homepage'
const { add, subtract, divide, multiply } = require('./cal');
import { mount } from 'cypress-react-unit-test';

describe('Unit test our math function' ,() => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/Homepage')
    })
    it('can add number', () => {
        expect(true).to.equal(true)
        expect(add(2, 3)).to.equal(5)
    })

    it('can subtract number', () => {
        expect(true).to.equal(true)
        expect(subtract(3, 2)).to.equal(1)
    })

    it('can divide number', () => {
        expect(true).to.equal(true)
        expect(divide(6, 3)).to.equal(2)
    })
    it('can multiply number', () => {
        expect(true).to.equal(true)
        expect(multiply(2, 3)).to.equal(6)
    })
})

describe('Request API', () => {
    it('display random user', () => {
        cy.request('https://jsonplaceholder.typicode.com/users')
            .should((response) => {
                expect(response.status).to.eq(200),
                expect(response.body).to.have.length(10)
            })
    })
})