class Visibility {
    get getHideBtn() {
        return cy.get('#hideButton')
    }

    get getRemoveBtn() {
        return cy.get('#removedButton')
    }

    get getZeroWidthBtn() {
        return cy.get('#zeroWidthButton')
    }

    get getOverlappedBtn() {
        return  cy.get('#overlappedButton')
    }

    get getTransparentBtn() {
        return cy.get('#transparentButton')
    }

    get getInvisibleBtn() {
        return cy.get('#invisibleButton')
    }

    get getNotDisplayBtn() {
        return cy.get('#notdisplayedButton')
    }

    get getOffScreenBtn() {
        return cy.get('#offscreenButton')
    }

    get getTableBody() {
        return cy.get("tbody tr")
    }
}

export default new Visibility();