class AjaxData {
    get getAjaxRequestBtn() {
        return cy.get('#ajaxButton')
    }

    get getAppearedData() {
        return cy.get('#content > p', { timeout: 16000 })
    }
}

export default new AjaxData();