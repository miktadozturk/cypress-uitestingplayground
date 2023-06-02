class SampleApp {
    get getLoginStatus() {
        return cy.get('#loginstatus')
    }

    get getUsername() {
        return cy.get('input[name="UserName"]')
    }

    get getPassword() {
        return cy.get('input[name="Password"]')
    }

    get getLoginBtn() {
        return cy.get('#login')
    }
}

export default new SampleApp();