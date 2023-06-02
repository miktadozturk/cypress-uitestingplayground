import homepage from "../../pages/uitestingplayground-pages/homepage/homepage.cy"
import progressBar from "../../pages/uitestingplayground-pages/functionalities-links/progressBar.cy"

describe('Progress Bar Scenario will be automated', {testIsolation:false}, () => {
    before(() => {
        //-- cy.step is a small Cypress helper that adds your test steps to the timeline and error logs --
        //-- Used cy.step instead of comment --
        cy.step('Navigate to Progress Bar Page and Validate to right page')
        cy.visit('/progressbar')
        homepage.verifiedUrl('http://uitestingplayground.com/progressbar')
    });

    it('Verified title', () => {
        cy.step('Verified the title is equal to Progress Bar')
        homepage.verifiedTitle('Progress Bar')
    });

    it('Click Start button and then waits for the progress bar to reach 75%. Then the test should click Stop. - Second Option', () => {
        cy.step('Click start')
        progressBar.getStartBtn.should('be.visible').and('contain', 'Start').click()
        
        cy.step('When progress bar reach to 75% then click the stop button')
        progressBar.getProgressBar.should('have.attr', 'aria-valuenow', '75').then(() => {
            progressBar.getStopBtn.click()
            progressBar.getProgressBar
            .invoke('attr', 'aria-valuenow') 
            .then((stopValue) => {
                const difference = 75 - parseInt(stopValue)
                expect(difference).to.be.eq(0)
                expect(difference).to.be.lessThan(5)
            })
        })
    });
});