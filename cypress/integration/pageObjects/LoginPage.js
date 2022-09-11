class LoginPage {
  getTitlePage() {
    return cy.title();
  }

  getAuthentication() {
    return cy.get(".navigation_page");
  }

  getEmailField() {
    return cy.get("#email");
  }

  getPassword() {
    return cy.get("#passwd");
  }

  getSubmitButton() {
    return cy.get("#SubmitLogin > span");
  }

  getHomeButton() {
    return cy.get(".home");
  }

  getAuthenticationFailed() {
    return cy.get("div[class='alert alert-danger'] ol li");
  }

  getSignOut() {
    return cy.get("a[class='logout']");
  }

  getCreateEmail() {
    return cy.get("#email_create");
  }

  getSumblitCreate() {
    return cy.get("#SubmitCreate > span");
  }

  getGender() {
    return cy.get("#id_gender2");
  }

  getFirstName() {
    return cy.get("#customer_firstname");
  }

  getLastName() {
    return cy.get("#customer_lastname");
  }

  getPassword() {
    return cy.get("#passwd");
  }

  getDays() {
    return cy.get("#days");
  }

  getMonth() {
    return cy.get("#months");
  }

  getYears() {
    return cy.get("#years");
  }

  getNewsletters() {
    return cy.get("#newsletter");
  }

  getOffer() {
    return cy.get("#optin");
  }

  getFirstNameAddress() {
    return cy.get("#firstname");
  }

  getLastNameAddress() {
    return cy.get("#lastname");
  }

  getCompany() {
    return cy.get("#company");
  }

  getAddreessFirstLine() {
    return cy.get("#address1");
  }

  getAddreessSecondLine() {
    return cy.get("#address2");
  }

  getCity() {
    return cy.get("#city");
  }

  getState() {
    return cy.get("#id_state");
  }

  getZip() {
    return cy.get("#postcode");
  }

  getAdditionalInfo() {
    return cy.get("#other");
  }

  getHomePhone() {
    return cy.get("#phone");
  }

  getMobilePhone() {
    return cy.get("#phone_mobile");
  }

  getSubmitCreateAccountButton() {
    return cy.get("#submitAccount > span");
  }
}

export default LoginPage;
