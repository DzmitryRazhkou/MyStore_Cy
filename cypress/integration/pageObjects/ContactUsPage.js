class ContactUsPage {
  getTitlePage() {
    return cy.title();
  }

  getContactButton() {
    return cy.get(".navigation_page");
  }

  getSubjectHeading() {
    return cy.get("#id_contact");
  }

  getEmailField() {
    return cy.get("#email");
  }

  getOrderReference() {
    return cy.get("#id_order");
  }

  getMessageField() {
    return cy.get("#message");
  }

  getSendButton() {
    return cy.get("#submitMessage > span");
  }

  getSuccessAlert() {
    return cy.get(".alert");
  }

  getHomeButton() {
    return cy.get(".icon-home");
  }
}

export default ContactUsPage;
