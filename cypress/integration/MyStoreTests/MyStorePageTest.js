import MyStorePage from "../MyStorePages/MyStorePage";
import LoginPage from "../MyStorePages/LoginPage";

describe("MyStore Page Test", () => {
  let myStoreData;

  before(() => {
    cy.launch();
    cy.fixture("example").then((data) => {
      myStoreData = data;
      return myStoreData;
    });
  });

  it.skip("My Store Page Validation", () => {
    const myStorePage = new MyStorePage();

    myStorePage.urlValidate();
    myStorePage.validateTitlePage();
    myStorePage.popularProducts();
    myStorePage.productNames();
    myStorePage.validateName();
    myStorePage.bestSellers();
    myStorePage.footerContactInfo();
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
