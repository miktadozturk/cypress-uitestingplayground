class DynamicTable {
    get getTableRow() {
        return cy.get("div[role='row']")
    }

    get getTableCell() {
        return cy.get("[role='cell']")
    }

    get getYellowLabel() {
        return cy.get('.container p')
    }
}

export default new DynamicTable();