import SearchPage from "../MyStorePages/SearchPage";
import LoginPage from "../MyStorePages/LoginPage";
import MyStorePage from "../MyStorePages/MyStorePage";

describe("Search Page Test", () => {
  let myStoreData;

  before(() => {
    cy.launch();
    cy.fixture("example").then((data) => {
      myStoreData = data;
      return myStoreData;
    });
  });

  it("Perform Search of The Product", () => {
    let myStorePage = new MyStorePage();
    let loginPage = new LoginPage();
    let searchPage = new SearchPage();

    let product = myStoreData.search.product;

    loginPage = myStorePage.clickOnSignInButton();
    loginPage.loginCorrectCredentials();
    loginPage.clickOnHomeButton();
    searchPage = myStorePage.search(product);
    // searchPage.productOnSearchPage();
  });
});
