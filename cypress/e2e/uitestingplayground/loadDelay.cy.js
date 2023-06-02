import homepage from "../../pages/uitestingplayground-pages/homepage/homepage.cy"

describe('Overlapped Element Scenario will be automated', () => {
    before(() => {
        //-- cy.step is a small Cypress helper that adds your test steps to the timeline and error logs --
        //-- Used cy.step instead of comment --
        cy.step('Navigate to Overlapped Element Page  and Validate to right page')
        cy.visit('/')
    });

    it('Record setting text into the Name input field, then execute your test to make sure that the text was entered correctly', () => {
        cy.get("a[href='/loaddelay']").should('be.visible').click()
        homepage.verifiedUrl('http://uitestingplayground.com/loaddelay')
    });
});