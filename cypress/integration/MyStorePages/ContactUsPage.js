class ContactUsPage {
  // Get Title Page:
  validateTitlePage(titlePage) {
    cy.title().should("equal", titlePage);
    return this;
  }

  // Get Contact Check Text:
  contactTextValidation(txt) {
    cy.get(".navigation_page").should("have.text", txt);
    return this;
  }

  // Get Subject Heading:
  subjectHeading(item, index) {
    cy.get("#id_contact").select(item).should("have.value", index);
    return this;
  }

  // Email Field:
  typeEmail(email) {
    cy.get("#email").type(email);
    return this;
  }

  // Order Reference:
  orderReference(orderReference) {
    cy.get("#id_order").type(orderReference);
    return this;
  }

  // Type Message:
  enterMessage(message) {
    cy.get("#message").type(message);
    return this;
  }

  // Click On The Send Button:
  clickSendBtn() {
    cy.get("#submitMessage > span").click();
    return this;
  }

  /* Fiil The ContactUs Up*/
  fillUpContactUs(item, index, email, orderReference, message) {
    this.subjectHeading(item, index);
    this.typeEmail(email);
    this.orderReference(orderReference);
    this.enterMessage(message);
    this.clickSendBtn();
  }

  // Validate Success Alert
  getSuccessAlert(alert) {
    cy.get(".alert").then((ele) => {
      const successAlert = ele.text();
      expect(successAlert.includes(alert)).to.be.true;
      cy.log(
        " =====> Contact Us Successfull Message: " + successAlert + " <===== "
      );
    });
  }

  // Click On The Home Button:
  clickOnHomeButton() {
    cy.fixture("example").then((data) => {
      cy.get(".icon-home").click();
      cy.title().should("equal", data.myStore.myStorePageTitle);
    });
    return this;
  }
}

export default ContactUsPage;
