class LoginPage {
  // Get Title Page:
  validateTitlePage(titlePage) {
    cy.title().should("equal", titlePage);
    return this;
  }

  // Get Validation From Authentication:
  getValidateAuthentication(txt) {
    cy.get(".navigation_page").should("have.text", txt);
  }

  // Login Fuction:
  loginCorrectCredentials() {
    cy.fixture("example").then((data) => {
      cy.get("#email").type(data.login.email);
      cy.get("#passwd").type(data.login.password);
      cy.get("#SubmitLogin > span").click();
    });
    return this;
  }

  // Login with Incorrect Credentials:
  loginIncorrectCredentials() {
    cy.fixture("example").then((data) => {
      cy.get("#email").type(data.login.wrongEmail);
      cy.get("#passwd").type(data.login.wrongPassword);
      cy.get("#SubmitLogin > span").click();
    });
    return this;
  }

  // Click On The Home Button:
  clickOnHomeButton() {
    cy.fixture("example").then((data) => {
      cy.get(".home").click();
      cy.title().should("equal", data.myStore.myStorePageTitle);
    });
    return this;
  }

  // Get Validation From My Account:
  getMyAccountButton(txt) {
    cy.get(".navigation_page").should("have.text", txt);
    return this;
  }

  // Get Validation Text From Alert
  authenticationFailed(message) {
    cy.get("div[class='alert alert-danger'] ol li").then((ele) => {
      const alertMessage = ele.text();
      expect(alertMessage.includes(message)).to.be.true;
      cy.log(" =====> Alert Message: " + alertMessage + " <===== ");
    });
  }

  // Click Sign Out:
  clickSignOut() {
    cy.get("a[class='logout']").click();
  }

  // Create A New Account

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
