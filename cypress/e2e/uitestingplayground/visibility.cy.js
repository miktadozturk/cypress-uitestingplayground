import homepage from "../../pages/uitestingplayground-pages/homepage/homepage.cy"
import visibility from "../../pages/uitestingplayground-pages/functionalities-links/visibility.cy";

describe('Visibility Scenario will be automated', {testIsolation:false}, () => {
    before(() => {
        //-- cy.step is a small Cypress helper that adds your test steps to the timeline and error logs --
        //-- Used cy.step instead of comment --
        cy.step('Navigate to Visibility Page  and Validate to right page')
        cy.visit('/visibility')
        homepage.verifiedUrl('http://uitestingplayground.com/visibility')
    });

    it('Verified title', () => {
        cy.step('Verified the title is equal to Sample App')
        homepage.verifiedTitle('Visibility')
    });

    it('Locators of all buttons', () => {
        cy.step('Locators of all buttons')
        visibility.getHideBtn.should('be.visible')
        visibility.getRemoveBtn.should('be.visible')
        visibility.getZeroWidthBtn.should('be.visible')
        visibility.getOverlappedBtn.should('be.visible')
        visibility.getTransparentBtn.should('be.visible')
        visibility.getInvisibleBtn.should('be.visible')
        visibility.getNotDisplayBtn.should('be.visible')
        visibility.getOffScreenBtn.should('be.visible')
    });

    it('Press hide button then validate other buttons visible or not - First option', () => {
        cy.step('Press hide button')
        visibility.getHideBtn.click().then(() => {
            cy.step('Checked other buttons visible or not')
            visibility.getHideBtn.should('exist')
            visibility.getRemoveBtn.should('not.exist')
            visibility.getZeroWidthBtn.should('not.be.visible').and('have.css', 'width', '0px')
            visibility.getOverlappedBtn.should('exist').and('not.have.css', 'background-color', 'white')
            visibility.getTransparentBtn.should('not.be.visible').and('have.css', 'opacity', '0')
            visibility.getInvisibleBtn.should('not.be.visible').and('have.css', 'visibility', 'hidden')
            visibility.getNotDisplayBtn.should('not.be.visible').and('have.css', 'display', 'none')
            visibility.getOffScreenBtn.should('exist').and('have.css', 'position', 'absolute')
        })
    });

    it('Press hide button then validate other buttons visible or not - Second option', () => {
        cy.step('Press hide button')
        visibility.getHideBtn.click().then($tbody => {
            cy.step('Checked other buttons visible or not')
            if ($tbody.text().includes('Removed')) {
                cy.log('Removed button is displayed')
            } else if ($tbody.text().includes('Zero Width')) {
                cy.log('Zero Width button is displayed')
            } else if ($tbody.text().includes('Overlapped')) {
                cy.log('Overlapped button is displayed')
            } else if ($tbody.text().includes('Opacity 0')) {
                cy.log('Opacity 0 button is displayed')
            } else if ($tbody.text().includes('Visibility Hidden')) {
                cy.log('Visibility Hidden button is displayed')
            } else if ($tbody.text().includes('Display None')) {
                cy.log('Display None button is displayed')
            } else if ($tbody.text().includes('Offscreen')) {
                cy.log('Offscreen button is displayed')
            } else {
                assert.isOk('Buttons are not displayed');
            }
        })
    })

    it('Press hide button then validate other buttons visible or not - Third option', () => {
        cy.step('Press hide button')
        visibility.getHideBtn.click().then($tbody => {
            cy.step('Checked other buttons visible or not')
            if ($tbody.find('table').length > 0) {   
                visibility.getTableBody.then($header => {
                  if ($header.is(':visible')){
                    //you get here only if button EXISTS and is VISIBLE
                    visibility.getHideBtn.should('exist').and('be.visible')
                  } else {
                    //you get here only if button EXISTS but is INVISIBLE
                    visibility.getOverlappedBtn.should('exist').and('not.have.css', 'background-color', 'white')
                  }
                });
            } else {
               //you get here if the button DOESN'T EXIST
               visibility.getRemoveBtn.should('not.exist')
               visibility.getTransparentBtn.should('not.be.visible').and('have.css', 'opacity', '0')
               visibility.getInvisibleBtn.should('not.be.visible').and('have.css', 'visibility', 'hidden')
               visibility.getNotDisplayBtn.should('not.be.visible').and('have.css', 'display', 'none')
               visibility.getZeroWidthBtn.should('not.be.visible').and('have.css', 'width', '0px')
               assert.isOk('Buttons are not displayed');
            }
        });
    })
});