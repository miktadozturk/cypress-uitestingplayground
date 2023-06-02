import homepage from "../../pages/uitestingplayground-pages/homepage/homepage.cy"
import textInputs from "../../pages/uitestingplayground-pages/functionalities-links/textInput.cy";

const { faker } = require('@faker-js/faker')
let buttonName = faker.name.fullName()

describe('Text Input Scenario will be automated', {testIsolation:false},() => {
    before(() => {
        //-- cy.step is a small Cypress helper that adds your test steps to the timeline and error logs --
        //-- Used cy.step instead of comment --
        cy.step('Navigate to Text Input Page and Validate to right page')
        cy.visit('/textinput')
        homepage.verifiedUrl('http://uitestingplayground.com/textinput')
    });

    it('Verified title', () => {
        cy.step('Verified the title is equal to Text Input')
        homepage.verifiedTitle('Text Input')
    });

    it('Record setting text into the input field and pressing the button, then verify the changed button name', () => {
        cy.step('Type new button name then click the button and verify the changed button name')
        textInputs.getButtonName.should('be.visible').type(buttonName)
        textInputs.getUpdatingButton.should('be.visible').click()
        .then(() => {
            textInputs.getUpdatingButton.should('have.text', buttonName)
        })
    });
});