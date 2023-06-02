import homepage from "../../pages/uitestingplayground-pages/homepage/homepage.cy"
import ajaxData from "../../pages/uitestingplayground-pages/functionalities-links/ajaxData.cy";

describe('Ajax Data Scenario will be automated', {testIsolation:false}, () => {
    before(() => {
        //-- cy.step is a small Cypress helper that adds your test steps to the timeline and error logs --
        //-- Used cy.step instead of comment --
        cy.step('Navigate to Ajax Data Page  and Validate to right page')
        cy.visit('/ajax')
        homepage.verifiedUrl('http://uitestingplayground.com/ajax')
    });

    it('Verified title', () => {
        cy.step('Verified the title is equal to Ajax Data')
        homepage.verifiedTitle('AJAX Data')
    });


    it('Click the Ajax Request button and wait for data to appear (15 seconds), click on text of the loaded label.', () => {

        // Click the button to Ajax Request
        ajaxData.getAjaxRequestBtn.should('be.visible').and('contain', 'Button').click()
        .then(() => {
        
            // Wait for data to appear
            ajaxData.getAppearedData.should('be.visible')

            // Click on the text of the loaded label
            ajaxData.getAppearedData.contains('Data loaded').click()

            // Make sure the label text appears
            cy.contains('Data loaded with AJAX get request.').should('have.text','Data loaded with AJAX get request.')
        })
    });
});