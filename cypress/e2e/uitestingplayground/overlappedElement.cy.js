import homepage from "../../pages/uitestingplayground-pages/homepage/homepage.cy"
import overlappedElement from "../../pages/uitestingplayground-pages/functionalities-links/overlappedElement.cy";

const { faker } = require('@faker-js/faker')
let name = faker.name.firstName()

describe('Overlapped Element Scenario will be automated', {testIsolation:false}, () => {
    before(() => {
        //-- cy.step is a small Cypress helper that adds your test steps to the timeline and error logs --
        //-- Used cy.step instead of comment --
        cy.step('Navigate to Overlapped Element Page  and Validate to right page')
        cy.visit('/overlapped')
        homepage.verifiedUrl('http://uitestingplayground.com/overlapped')
    });

    it('Verified title', () => {
        cy.step('Verified the title is equal to Overlapped Element')
        homepage.verifiedTitle('Overlapped Element')
    });

    it('Record setting text into the Name input field, then execute your test to make sure that the text was entered correctly', () => {
        cy.step('Scroll Element, Then verify the name field, then type name and verify entered value')
        overlappedElement.playgroundFields.scrollTo('bottom')
        overlappedElement.findName.should('be.visible').as('playgroundName').then(() => {
            //-- Used alias for just simple example --
            cy.get('@playgroundName').type(name)
            cy.get('@playgroundName').should('have.value', name)
        })
    });
});