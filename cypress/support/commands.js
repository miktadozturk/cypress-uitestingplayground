// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import sampleApp from "../pages/uitestingplayground-pages/functionalities-links/sampleApp.cy"

//Login Commands for Sample App
Cypress.Commands.add('loginSampleApp', (username, password) => {
    sampleApp.getUsername.should('be.visible').type(username, { log: false })
    sampleApp.getPassword.should('be.visible').type(password, { log: false })
    sampleApp.getLoginBtn.should('be.visible').click()
})

//Login with Session Commands for Sample App
Cypress.Commands.add('loginViaSession', (username, password) => {
    cy.session([username, password], () => {
        cy.visit('http://uitestingplayground.com/sampleapp')
        sampleApp.getUsername.should('be.visible').type(username, { log: false })
        sampleApp.getPassword.should('be.visible').type(password, { log: false })
        sampleApp.getLoginBtn.should('be.visible').click()
    })
})