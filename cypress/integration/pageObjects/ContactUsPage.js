class ContactUsPage {
  getTitlePage() {
    return cy.title();
  }

  // Get Title Page:
  validateTitlePage(titlePage) {
    this.getTitlePage().should("equal", titlePage);
  }

  getContactButton() {
    return cy.get(".navigation_page");
  }

  // Get Contact Button
  contactTextValidation(txt) {
    this.getContactButton().should("have.text", txt);
  }

  getSubjectHeading() {
    return cy.get("#id_contact");
  }

  // Get Subject Heading:
  subjectHeading(item, index) {
    this.getSubjectHeading().select(item).should("have.value", index);
  }

  getEmailField() {
    return cy.get("#email");
  }

  // Email Field:
  typeEmail(email) {
    this.getEmailField().type(email);
  }

  getOrderReference() {
    return cy.get("#id_order");
  }

  // Order Reference:
  orderReference(orderReference) {
    this.getOrderReference().type(orderReference);
  }

  getMessageField() {
    return cy.get("#message");
  }

  // Type Message:
  enterMessage(message) {
    this.getMessageField().type(message);
  }

  getSendButton() {
    return cy.get("#submitMessage > span");
  }

  // Click On The Send Button:
  clickSendBtn() {
    this.getSendButton().click();
  }

  getSuccessAlert() {
    return cy.get(".alert");
  }

  getHomeButton() {
    return cy.get(".icon-home");
  }

  // Click On The Home Button:
  clickOnHomeButton() {
    this.getHomeButton().click();
  }
}

export default ContactUsPage;
