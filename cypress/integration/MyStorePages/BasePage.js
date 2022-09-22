class BasePage {
  static full() {
    before(() => {
      cy.launch();
      cy.fixture("example").then((data) => {
        myStoreData = data;
        return myStoreData;
      });
    });
  }

  static scrollToTop(locator) {
    cy.get(locator).scrollIntoView();
  }

  static scrollToBottom(locator) {
    cy.get(locator).scrollIntoView();
  }

  static wait(number) {
    cy.wait(number);
  }
}
export default BasePage;
