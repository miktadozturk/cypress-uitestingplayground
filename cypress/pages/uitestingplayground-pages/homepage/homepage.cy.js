class Homepage {
    verifiedTitle(text) {
        return cy.title().should('eq', text)
    }

    verifiedUrl(url) {
        return cy.url().should('eq', url)
    }
}

export default new Homepage();