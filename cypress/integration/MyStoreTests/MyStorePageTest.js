import MyStorePage from "../MyStorePages/MyStorePage";
import LoginPage from "../MyStorePages/LoginPage";
import EveningDresses from "../MyStorePages/EveningDresses";

describe("MyStore Page Test", () => {
  let myStoreData;
  let myStorePage;
  let loginPage;
  let eveningDresses;

  before(() => {
    cy.launch();
    cy.fixture("example").then((data) => {
      myStoreData = data;
      return myStoreData;
    });
  });

  after(() => {
    cy.tearDown();
  });

  it("Evening Dresses Sorting By CheckBoxes", () => {
    const myStorePage = new MyStorePage();

    myStorePage.urlValidate();
    myStorePage.validateTitlePage();
    myStorePage.popularProducts();
    myStorePage.productNames();
    myStorePage.validateName();
    myStorePage.bestSellers();
    myStorePage.footerContactInfo();
  });

  it("Evening Dress Feature Page By Selecting Size, Colors", () => {
    myStorePage = new MyStorePage();
    loginPage = new LoginPage();
    eveningDresses = new EveningDresses();

    let productName = myStoreData.eveningDress.productName;
    let size = myStoreData.eveningDress.size;
    let color = myStoreData.eveningDress.color;
    let message = myStoreData.eveningDress.message;

    loginPage = myStorePage.clickOnSignInButton();
    loginPage.loginCorrectCredentials();
    loginPage.clickOnHomeButton();
    eveningDresses = myStorePage.clickOnEveningDressesPage();
    eveningDresses.selectSize(size);
    eveningDresses.selectColor(color);
    eveningDresses.validateProduct(productName, message);
    eveningDresses.clickOnHomeButton();
    cy.tearDown();
  });

  it("Evening Dress Feature Page By Moving Pointer", () => {
    myStorePage = new MyStorePage();
    loginPage = new LoginPage();
    eveningDresses = new EveningDresses();

    loginPage = myStorePage.clickOnSignInButton();
    loginPage.loginCorrectCredentials();
    loginPage.clickOnHomeButton();
    eveningDresses = myStorePage.clickOnEveningDressesPage();
    eveningDresses.rightSlider();
    eveningDresses.clickOnHomeButton();
    cy.tearDown();
  });

  it("Add Product To Cart", () => {
    let myStorePage = new MyStorePage();
    let loginPage = new LoginPage();

    let productName = myStoreData.search.product;
    let message = myStoreData.search.message;

    loginPage = myStorePage.clickOnSignInButton();
    loginPage.loginCorrectCredentials();
    loginPage.clickOnHomeButton();
    myStorePage.addProduct(productName);
    myStorePage.clickOnCart();
    myStorePage.getPrice();
    myStorePage.getTax();
    myStorePage.getTotalPrice();
    myStorePage.proceedToCheckout();
    myStorePage.proceedToCheckout();
    myStorePage.clickOnCheckBox();
    myStorePage.proceedToCheckout();
    myStorePage.wireTransfer();
    myStorePage.confirmOrder();
    myStorePage.orderComplete(message);
  });
});
