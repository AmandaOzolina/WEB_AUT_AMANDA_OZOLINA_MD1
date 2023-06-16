class TextBoxPage {
  static get url() {
    return "https://demoqa.com/selectable";
  }

  static get changeTab() {
    return cy.get("[data-rb-event-key='grid']");
  }
  static get selectionRowOne() {
    return cy.get("#row1 .list-group-item-action");
  }
  static get selectionRowTwo() {
    return cy.get("#row2 .list-group-item-action");
  }
  static get selectionRowThree() {
    return cy.get("#row3 .list-group-item-action");
  }

}

export default TextBoxPage;