import homepage from "../../pages/uitestingplayground-pages/homepage/homepage.cy"
import sampleApp from "../../pages/uitestingplayground-pages/functionalities-links/sampleApp.cy";

const { faker } = require('@faker-js/faker')
let username = faker.name.firstName()

describe('Sample App Scenario will be automated', {testIsolation: false}, () => {
    beforeEach(() => {
        //-- cy.step is a small Cypress helper that adds your test steps to the timeline and error logs --
        //-- Used cy.step instead of comment --
        cy.step('Navigate to Sample App Page  and Validate to right page')
        cy.fixture("uitestingplayground-credentials").as('password')
        cy.visit('/sampleapp')
        homepage.verifiedUrl('http://uitestingplayground.com/sampleapp')
    });

    it('Verified title', () => {
        cy.step('Verified the title is equal to Sample App')
        homepage.verifiedTitle('Sample App')
    });

    it('Fill in and submit the form for successfull login, first option', () => {
        cy.step('Successfull Login with Fixtures')
        cy.get('@password').then((data) => {
            cy.loginSampleApp(data.username, data.password)
            sampleApp.getLoginStatus.should('be.visible').and('have.text', 'Welcome, ' + data.username + '!')
        })
    });

    it('Successfull login with session, second option', () => {
        cy.step('Successfull Login but with Session')
        cy.get('@password').then((data) => {
            cy.loginViaSession(username, data.password)
        })
    });
});