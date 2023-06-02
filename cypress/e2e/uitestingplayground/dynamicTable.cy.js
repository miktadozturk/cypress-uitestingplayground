/// <reference types="Cypress" />

import homepage from "../../pages/uitestingplayground-pages/homepage/homepage.cy"
import dynamicTable from "../../pages/uitestingplayground-pages/functionalities-links/dynamicTable.cy"

describe('Dynamic Table Scenario will be automated', {testIsolation:false} ,() => {
    before(() => {
        //-- cy.step is a small Cypress helper that adds your test steps to the timeline and error logs --
        //-- Used cy.step instead of comment --
        cy.step('Navigate to Dynamic Table Page  and Validate to right page')
        cy.visit('/dynamictable')
        homepage.verifiedUrl('http://uitestingplayground.com/dynamictable')
    });

    it('Verified title', () => {
        cy.step('Verified the title is equal to Dynamic Table')
        homepage.verifiedTitle('Dynamic Table')
    });

    it('Get CPU value of Chrome from table then compare the two values', () => {
        //-- Get row with contains chrome from table --
        dynamicTable.getTableRow.contains('Chrome')
        .parent()
        .children()
        //-- Get with contains % from the row --
        .contains('%').then(($cpuValue) => {
            //-- Get the CPU value --
            const cpuValue = $cpuValue.text()
            //-- Logged Chrome CPU with value --
            cy.log(`Chrome CPU: ${cpuValue}`)
            //-- Then verify yellow label Chrome CPU --
            dynamicTable.getYellowLabel.eq(1).should('exist').and('have.text', `Chrome CPU: ${cpuValue}`)
        })
    });
});