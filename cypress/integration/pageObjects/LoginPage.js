class LoginPage {
  getTitlePage() {
    return cy.title();
  }

  // Get Title Page:
  validateTitlePage(titlePage) {
    this.getTitlePage().should("equal", titlePage);
  }

  getAuthentication() {
    return cy.get(".navigation_page");
  }

  // Login:
  getEmailField() {
    return cy.get("#email");
  }

  getPassword() {
    return cy.get("#passwd");
  }

  getSubmitButton() {
    return cy.get("#SubmitLogin > span");
  }

  // Login Fuction:
  login(email, password) {
    this.getEmailField().type(email);
    this.getPassword().type(password);
    this.getSubmitButton().click();
  }

  getHomeButton() {
    return cy.get(".home");
  }

  getAuthenticationFailed() {
    return cy.get("div[class='alert alert-danger'] ol li");
  }

  // Get Validation From Authentication:
  getValidateAuthentication(text) {
    this.getAuthentication().should("have.text", text);
  }

  getSignOut() {
    return cy.get("a[class='logout']");
  }

  // clickOnSignOut:
  clickSignOut() {
    this.getSignOut().click();
  }
  // Pre-Steps
  getCreateEmail() {
    return cy.get("#email_create");
  }

  // Type a New Email For Creating A New Account:
  typeNewEmailForCreateNewAccount(newEmail) {
    this.getCreateEmail().type(newEmail);
  }

  getSumblitCreate() {
    return cy.get("#SubmitCreate > span");
  }

  // Submit New Email Created:
  submitNewAccount() {
    this.getSumblitCreate().click();
  }

  // Create New Account
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

  getHomeButton() {
    return cy.get(".icon-home");
  }

  // Click On The Home Button:
  clickOnHomeButton() {
    this.getHomeButton().click();
  }

  getMyAccountButton() {
    return cy.get(".navigation_page");
  }

  // Create A New Account:
  createNewAccount(
    firstName,
    lastName,
    password,
    days,
    months,
    years,
    company,
    addressFirstLine,
    addressSecondLine,
    city,
    state,
    zipCode,
    addInfo,
    phone
  ) {
    this.getGender().check();
    this.getFirstName().type(firstName);
    this.getLastName().type(lastName);
    this.getPassword().type(password);
    this.getDays().select(days);
    this.getMonth().select(months);
    this.getYears().select(years);
    this.getCompany().type(company);
    this.getAddreessFirstLine().type(addressFirstLine);
    this.getAddreessSecondLine().type(addressSecondLine);
    this.getCity().type(city);
    this.getState().select(state);
    this.getZip().type(zipCode);
    this.getAdditionalInfo().type(addInfo);
    this.getHomePhone().type(phone);
    this.getMobilePhone().type(phone);
    this.getSubmitCreateAccountButton().click();
  }
}

export default LoginPage;
