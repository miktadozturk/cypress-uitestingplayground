class TextInputs {
    get getButtonName() {
        return cy.get('#newButtonName')
    }

    get getUpdatingButton() {
        return cy.get('#updatingButton')
    }
}

export default new TextInputs();