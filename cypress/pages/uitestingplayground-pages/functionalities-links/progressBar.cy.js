class ProgressBar {
    get getStartBtn() {
        return cy.get('#startButton')
    }

    get getStopBtn() {
        return cy.get('#stopButton')
    }

    get getProgressBar() {
        return cy.get('#progressBar', { timeout: 30000 })
    }
}

export default new ProgressBar();