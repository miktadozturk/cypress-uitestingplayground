class OverlappedElement {
    get playgroundFields() {
        return cy.get('section > div > div > div:nth-child(1)')
    }

    get findName() {
        return cy.get('section > div > div > div:nth-child(1)').find('input#name')
    }
}

export default new OverlappedElement();