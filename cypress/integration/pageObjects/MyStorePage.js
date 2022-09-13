class MyStorePage {
  urlValidate() {
    cy.url().should("include", "automation");
  }

  getContactUsButton() {
    return cy.get("#contact-link > a");
  }

  // Click On ContactUs Button:
  clickOnContactUsButton() {
    this.getContactUsButton().click();
  }

  getLoginButton() {
    return cy.get(".login");
  }

  // Click On SignIn Button:
  clickOnSignInButton() {
    this.getLoginButton().click();
  }

  getTitlePage() {
    return cy.title();
  }

  // Get Title Page:
  validateTitlePage(titlePage) {
    this.getTitlePage().should("equal", titlePage);
  }

  getPopularProducts() {
    return cy.get("div[class='tab-content']").find("ul:nth-child(1) li");
  }

  // Popular Products
  popularProducts() {
    this.getPopularProducts().should("have.length", 7);
  }

  getBestSellersSection() {
    return cy.get("#home-page-tabs > :nth-child(2) > .blockbestsellers");
  }

  getBestSellersProducts() {
    return cy.get("div[class='tab-content']").find("ul:nth-child(1) li");
  }

  // Best Sellers Products
  bestSellers() {
    this.getBestSellersSection().click();
    this.getBestSellersProducts().should("have.length", 7);
  }

  getFooterContactInfo() {
    return cy.get("div[class='col-xs-6'] ul").find("li");
  }

  // Footer Contact Information:
  footerContactInfo() {
    this.getFooterContactInfo().should("have.length", 3);
  }
}

export default MyStorePage;
