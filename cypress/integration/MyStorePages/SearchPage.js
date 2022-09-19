class SearchPage {
  //   productOnSearchPage() {
  //     cy.get(".ajax_block_product").trigger("mouse over");
  //     return this;
  //   }

  clickOnFrame() {
    cy.frameLoaded();
    cy.get("iframe[class='fancybox-iframe']");
    cy.iframe();
    cy.get("button[name='Submit']").click();
    return this;
  }
}

export default SearchPage;
