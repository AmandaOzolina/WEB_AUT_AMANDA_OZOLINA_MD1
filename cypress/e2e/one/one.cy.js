import TextBoxPage from "../../pageObjects/textBox.page";

describe("Selectable", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/selectable")
    //TextBoxPage.visit();
  });

  it("Selection", () => {
  //it("Text box positive case", () => {
    // Actions
    //cy.get("[data-rb-event-key='grid']").click();
    TextBoxPage.changeTab.click();
    TextBoxPage.selectionRowOne.eq(1).click();
    TextBoxPage.selectionRowTwo.eq(0).click();
    TextBoxPage.selectionRowTwo.eq(2).click();
    TextBoxPage.selectionRowThree.eq(1).click();

    
    // // Validation
    TextBoxPage.selectionRowOne.eq(0).should('have.class', 
    'list-group-item list-group-item-action');
    TextBoxPage.selectionRowOne.eq(1).should('have.class', 
    'list-group-item active list-group-item-action');
    TextBoxPage.selectionRowOne.eq(2).should('have.class', 
    'list-group-item list-group-item-action');
    TextBoxPage.selectionRowTwo.eq(0).should('have.class', 
    'list-group-item active list-group-item-action');
    TextBoxPage.selectionRowTwo.eq(1).should('have.class', 
    'list-group-item list-group-item-action');
    TextBoxPage.selectionRowTwo.eq(2).should('have.class', 
    'list-group-item active list-group-item-action');
    TextBoxPage.selectionRowThree.eq(0).should('have.class', 
    'list-group-item list-group-item-action');
    TextBoxPage.selectionRowThree.eq(1).should('have.class', 
    'list-group-item active list-group-item-action');
    TextBoxPage.selectionRowThree.eq(2).should('have.class', 
    'list-group-item list-group-item-action');
    
  });

});