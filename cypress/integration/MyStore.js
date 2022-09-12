import MyStorePage from "../integration/pageObjects/MyStorePage";
import ContactUsPage from "../integration/pageObjects/ContactUsPage";
import LoginPage from "../integration/pageObjects/LoginPage";
import { faker } from "@faker-js/faker";

// MyStore Page
describe("My Store", () => {
  before(() => {
    cy.launch();
  });

  it.skip("MyStorePage Test", () => {
    const myStorePage = new MyStorePage();

    // incluse - equal - eql
    myStorePage.getTitlePage().should("equal", "My Store");
    myStorePage.getPopularProducts().should("have.length", 7);
    myStorePage.getBestSellersSection().click();
    myStorePage.getBestSellersProducts().should("have.length", 7);
    myStorePage.getFooterContactInfo().should("have.length", 3);

    myStorePage.getFooterContactInfo().each((ele) => {
      const text = ele.find("div h3").text();
      if (text.includes("Call Us")) {
        cy.log(" =====> " + text + " <===== ");
      }
    });
  });

  // ContactUs Page
  it.skip("ContactUsPage Test", () => {
    const myStorePage = new MyStorePage();
    const contactUsPage = new ContactUsPage();

    let email = faker.internet.email();
    let orderReference = faker.random.words();
    let message = faker.random.words();

    myStorePage.getContactUsButton().click();
    contactUsPage.getTitlePage().should("equal", "Contact us - My Store");
    contactUsPage.getContactButton().should("have.text", "Contact");
    contactUsPage
      .getSubjectHeading()
      .select("Customer service")
      .should("have.value", 2);
    contactUsPage.getEmailField().type(email);
    contactUsPage.getOrderReference().type(orderReference);
    contactUsPage.getMessageField().type(message);
    contactUsPage.getSendButton().click();
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
    contactUsPage.getHomeButton().click();
  });

  // Login Page
  it.skip("Login With Valid Credentials Test", () => {
    const myStorePage = new MyStorePage();
    const loginPage = new LoginPage();

    let email = "dimagadjilla@gmail.com";
    let password = "3036057Dr";

    myStorePage.getLoginButton().click();
    loginPage.getTitlePage().should("equal", "Login - My Store");
    loginPage.getAuthentication().should("have.text", "\tAuthentication");
    loginPage.getEmailField().type(email);
    loginPage.getPassword().type(password);
    loginPage.getSubmitButton().click();
    loginPage.getHomeButton().click();
    loginPage.getSignOut().click();
  });

  // Login Page
  it.skip("Login With Invalid Credentials Test", () => {
    const myStorePage = new MyStorePage();
    const loginPage = new LoginPage();

    let email = "dimagadjilla_@gmail.com";
    let password = "3036057Dr_";

    myStorePage.getLoginButton().click();
    loginPage.getTitlePage().should("equal", "Login - My Store");
    loginPage.getAuthentication().should("have.text", "\tAuthentication");
    loginPage.getEmailField().type(email);
    loginPage.getPassword().type(password);
    loginPage.getSubmitButton().click();
    loginPage.getAuthenticationFailed().then((ele) => {
      const alertMessage = ele.text();
      expect(alertMessage.includes("Authentication failed.")).to.be.true;
      cy.log(" =====> Alert Message: " + alertMessage + " <===== ");
    });

    loginPage.getHomeButton().click();
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

    function randomMonth() {
      var month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "Jule",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
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

    myStorePage.getLoginButton().click();
    loginPage.getTitlePage().should("equal", "Login - My Store");
    loginPage.getCreateEmail().type(email);
    loginPage.getSumblitCreate().click();
    loginPage.getGender().check();

    loginPage.getFirstName().type(firstName);
    loginPage.getLastName().type(lastName);
    loginPage.getPassword().type(password);
    loginPage.getDays().select(days);
    loginPage.getMonth().select(months);
    loginPage.getYears().select(years);
    loginPage.getCompany().type(company);
    loginPage.getAddreessFirstLine().type(addressFirstLine);
    loginPage.getAddreessSecondLine().type(addressSecondLine);
    loginPage.getCity().type(city);
    loginPage.getState().select(state);
    loginPage.getZip().type(zipCode);
    loginPage.getAdditionalInfo().type(addInfo);
    loginPage.getHomePhone().type(phone);
    loginPage.getMobilePhone().type(phone);
    loginPage.getSubmitCreateAccountButton().click();
    loginPage.getHomeButton().click();
  });
});
