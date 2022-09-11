class MyStorePage {
  getContactUsButton() {
    return cy.get("#contact-link > a");
  }

  getLoginButton() {
    return cy.get(".login");
  }

  getTitlePage() {
    return cy.title();
  }

  getPopularProducts() {
    return cy.get("div[class='tab-content']").find("ul:nth-child(1) li");
  }

  getBestSellersSection() {
    return cy.get("#home-page-tabs > :nth-child(2) > .blockbestsellers");
  }

  getBestSellersProducts() {
    return cy.get("div[class='tab-content']").find("ul:nth-child(1) li");
  }

  getFooterContactInfo() {
    return cy.get("div[class='col-xs-6'] ul").find("li");
  }
}

export default MyStorePage;
