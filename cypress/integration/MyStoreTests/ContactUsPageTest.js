import MyStorePage from "../MyStorePages/MyStorePage";
import ContactUsPage from "../MyStorePages/ContactUsPage";
import BasePage from "../MyStorePages/BasePage";
import { faker } from "@faker-js/faker";

describe("ContactUs Page Test", () => {
  let myStoreData;
  before(() => {
    cy.launch();
    cy.fixture("example").then((data) => {
      myStoreData = data;
      return myStoreData;
    });
  });

  it("ContactUs Feature Validation", () => {
    let myStorePage = new MyStorePage();
    let contactUsPage = new ContactUsPage();

    let pageTitle = myStoreData.contactUs.contactPageTitle;
    let contactUsValidationText = myStoreData.contactUs.contactEleText;
    let subject = myStoreData.contactUs.subject;
    let indexSubject = myStoreData.contactUs.indexSubject;
    let email = faker.internet.email();
    let orderReference = faker.random.words();
    let message = faker.random.words();
    let successAlertMesssage = myStoreData.contactUs.successAlert;

    contactUsPage = myStorePage.clickOnContactUsButton();
    contactUsPage.validateTitlePage(pageTitle);
    contactUsPage.contactTextValidation(contactUsValidationText);
    contactUsPage.fillUpContactUs(
      subject,
      indexSubject,
      email,
      orderReference,
      message
    );
    contactUsPage.getSuccessAlert(successAlertMesssage);
    contactUsPage.clickOnHomeButton();
  });
});
