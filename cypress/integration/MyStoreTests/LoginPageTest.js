import MyStorePage from "../MyStorePages/MyStorePage";
import LoginPage from "../MyStorePages/LoginPage";
import { faker } from "@faker-js/faker";

describe("Login Page Test", () => {
  let myStoreData;

  before(() => {
    cy.launch();
    cy.fixture("example").then((data) => {
      myStoreData = data;
      return myStoreData;
    });
  });

  it("Login With Correct Credentials", () => {
    let myStorePage = new MyStorePage();
    let loginPage = new LoginPage();

    let pageTitle = myStoreData.login.loginPageTitle;
    let authenticationText = myStoreData.login.authenticationText;
    let myAccountText = myStoreData.login.myAccount;

    loginPage = myStorePage.clickOnSignInButton();
    loginPage.validateTitlePage(pageTitle);
    loginPage.getValidateAuthentication(authenticationText);
    loginPage.loginCorrectCredentials();
    loginPage.getMyAccountButton(myAccountText);
    loginPage.clickOnHomeButton();
    loginPage.clickSignOut();
  });

  it("Login With Incorrect Credentials", () => {
    let myStorePage = new MyStorePage();
    let loginPage = new LoginPage();

    let pageTitle = myStoreData.login.loginPageTitle;
    let authenticationText = myStoreData.login.authenticationText;
    let myAccountText = myStoreData.login.unsuccessAuthentication;

    loginPage = myStorePage.clickOnSignInButton();
    loginPage.validateTitlePage(pageTitle);
    loginPage.getValidateAuthentication(authenticationText);
    loginPage.loginIncorrectCredentials();
    loginPage.authenticationFailed(myAccountText);
    loginPage.clickOnHomeButton();
  });

  it("Create a New Account", () => {
    let myStorePage = new MyStorePage();
    let loginPage = new LoginPage();

    let pageTitle = myStoreData.login.loginPageTitle;
    let authenticationText = myStoreData.login.authenticationText;
    let myAccountText = myStoreData.login.myAccount;

    let email = faker.internet.email();
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let password = faker.internet.password();

    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min) + 1);
    }

    let days = randomIntFromInterval(1, 31);
    let months = faker.date.month();
    let years = randomIntFromInterval(1900, 2022);
    let company = faker.company.name();
    let addressFirstLine = faker.address.streetAddress();
    let addressSecondLine = faker.address.secondaryAddress();
    let city = faker.address.city();
    let state = faker.address.state();
    let zipCode = faker.address.zipCode("#####");
    let addInfo = faker.random.words();
    let phone = faker.phone.phoneNumber("(###)###-####");

    loginPage = myStorePage.clickOnSignInButton();
    loginPage.validateTitlePage(pageTitle);
    loginPage.getValidateAuthentication(authenticationText);
    loginPage.typeNewEmailForCreateNewAccount(email);
    loginPage.submitNewAccount();
    loginPage.createNewAccount(
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
    );
    loginPage.getMyAccountButton(myAccountText);
    loginPage.clickOnHomeButton();
  });
});
