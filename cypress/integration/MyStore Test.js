import MyStorePage from "./pageObjects/MyStorePage";
import ContactUsPage from "./pageObjects/ContactUsPage";
import LoginPage from "./pageObjects/LoginPage";
import { faker } from "@faker-js/faker";

// MyStore Page
describe("My Store", () => {
  before(() => {
    cy.launch();
  });

  it("MyStorePage Test", () => {
    const myStorePage = new MyStorePage();

    // incluse - equal - eql
    myStorePage.urlValidate();
    myStorePage.validateTitlePage("My Store");
    myStorePage.popularProducts();
    myStorePage.bestSellers();
    myStorePage.footerContactInfo();

    myStorePage.getFooterContactInfo().each((ele) => {
      const text = ele.find("div h3").text();
      if (text.includes("Call Us")) {
        cy.log(" =====> " + text + " <===== ");
      }
    });
  });

  // ContactUs Page
  it("ContactUsPage Test", () => {
    const myStorePage = new MyStorePage();
    const contactUsPage = new ContactUsPage();

    let subject = "Customer service";
    let email = faker.internet.email();
    let orderReference = faker.random.words();
    let message = faker.random.words();

    myStorePage.clickOnContactUsButton();
    contactUsPage.validateTitlePage("Contact us - My Store");
    contactUsPage.contactTextValidation("Contact");
    contactUsPage.subjectHeading(subject, 2);
    contactUsPage.typeEmail(email);
    contactUsPage.orderReference(orderReference);
    contactUsPage.enterMessage(message);
    contactUsPage.clickSendBtn();

    contactUsPage.getSuccessAlert().then((ele) => {
      const successAlert = ele.text();
      expect(
        successAlert.includes(
          "Your message has been successfully sent to our team."
        )
      ).to.be.true;
      cy.log(
        " =====> Contact Us Successfull Message: " + successAlert + " <===== "
      );
    });
    contactUsPage.clickOnHomeButton();
  });

  // Login Page
  it("Login With Valid Credentials Test", () => {
    const myStorePage = new MyStorePage();
    const loginPage = new LoginPage();

    let email = "dimagadjilla@gmail.com";
    let password = "3036057Dr";

    myStorePage.clickOnSignInButton();
    loginPage.validateTitlePage("Login - My Store");
    loginPage.getValidateAuthentication("\tAuthentication");
    loginPage.login(email, password);
    loginPage.clickOnHomeButton();
    loginPage.clickSignOut();
  });

  // Login Page
  it("Login With Invalid Credentials Test", () => {
    const myStorePage = new MyStorePage();
    const loginPage = new LoginPage();

    let email = "dimagadjilla_@gmail.com";
    let password = "3036057Dr_";

    myStorePage.clickOnSignInButton();
    loginPage.validateTitlePage("Login - My Store");
    loginPage.getValidateAuthentication("\tAuthentication");
    loginPage.login(email, password);
    loginPage.getAuthenticationFailed().then((ele) => {
      const alertMessage = ele.text();
      expect(alertMessage.includes("Authentication failed.")).to.be.true;
      cy.log(" =====> Alert Message: " + alertMessage + " <===== ");
    });

    loginPage.clickOnHomeButton();
  });

  // Login Page
  it("Create a New Account Test", () => {
    const myStorePage = new MyStorePage();
    const loginPage = new LoginPage();

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

    myStorePage.clickOnSignInButton();
    loginPage.validateTitlePage("Login - My Store");
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
    loginPage.getMyAccountButton().then((ele) => {
      const txt = ele.text();
      expect(txt.includes("My account")).to.be.true;
      cy.log(" =====> Element Text: " + txt + " <===== ");
    });
    loginPage.clickOnHomeButton();
  });
});
