import ContactUsPage from "./ContactUsPage";
import LoginPage from "./LoginPage";
import SearchPage from "./SearchPage";

class MyStorePage {
  constructor() {
    cy.get("#contact-link > a").as("contactUsLocator");
    cy.get(".login").as("signInLocator");
    cy.get("div[class='tab-content'] ul:nth-child(1) li").as("popularProducts");
    cy.get("#home-page-tabs > :nth-child(2) > .blockbestsellers").as(
      "bestSellerSection"
    );
    cy.get("div[class='tab-content'] ul:nth-child(1) li").as(
      "bestSellerProducts"
    );
    cy.get("div[class='col-xs-6'] ul li").as("footerContactInfo");
    cy.get("a[class='product-name']:visible").as("productName");
  }

  // Click On ContactUs Button:
  clickOnContactUsButton() {
    cy.get("@contactUsLocator").click();
    return new ContactUsPage();
  }

  // Click On SignIn Button:
  clickOnSignInButton() {
    cy.get("@signInLocator").click();
    return new LoginPage();
  }

  // Type into search field:
  typeIntoSearch(product) {
    cy.get("#search_query_top").type(product);
    return this;
  }

  // Press Search Plus:
  clickSearch() {
    cy.get("#searchbox > .btn").click();
    return this;
  }

  // Get Price:
  getPrice() {
    cy.get("#total_product").each((el) => {
      var priceValue = el.text().replace(/\$/g, "");
      cy.log(" =====> Price Value With Removed $ " + priceValue + " <===== ");
    });
    return this;
  }

  // Get Tax:
  getTax() {
    cy.get("#total_shipping").each((el) => {
      var taxValue = el.text().replace(/\$/g, "");
      cy.log(" =====> Tax Value With Removed $ " + taxValue + " <===== ");
    });
    return this;
  }

  // Get Total Price:
  getTotalPrice() {
    cy.get("#total_price_container").each((el) => {
      var totalValue = el.text().replace(/\$/g, "");
      cy.log(" =====> Tax Value With Removed $ " + totalValue + " <===== ");
    });
    return this;
  }

  // Proceed To Cheackout:
  proceedToCheckout() {
    cy.get(".cart_navigation > .button > span").click();
  }

  // Check CheckBox:
  clickOnCheckBox() {
    cy.get("#cgv").check();
  }

  // Payment:
  wireTransfer() {
    cy.get(".bankwire").click();
  }

  // Confirm Order:
  confirmOrder() {
    cy.get("#cart_navigation > .button > span").click();
  }

  // Get Confirmation Order:
  orderComplete(message) {
    cy.get(".cheque-indent > .dark").then((ele) => {
      const messageConfirm = ele.text();
      expect(messageConfirm.includes(message)).to.be.true;
      cy.log(" =====> My Store Order is Complete: " + message + " <===== ");
    });
  }

  // Validate Price:

  // Perform Search:
  search(product) {
    this.typeIntoSearch(product);
    this.clickSearch();
    return new SearchPage();
  }

  /* 
    Methods:
  */

  urlValidate() {
    cy.fixture("example").then((data) => {
      cy.url().should("include", data.myStore.urlInclude);
    });
    return this;
  }

  // Get Title Page:
  validateTitlePage() {
    cy.fixture("example").then((data) => {
      cy.title().should("equal", data.myStore.myStorePageTitle);
    });
    return this;
  }

  // Popular Products
  popularProducts() {
    cy.fixture("example").then((data) => {
      cy.get("@popularProducts").should(
        "have.length",
        data.myStore.popularProduct
      );
    });
    return this;
  }

  // Add Product To Cart
  addProduct(productName) {
    cy.get("@popularProducts").each(($el, index) => {
      if ($el.text().includes(productName)) {
        cy.get(
          "#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span"
        )
          .eq(index)
          .click();
      }
    });
    return this;
  }

  // Click On The Cart
  clickOnCart() {
    cy.get('[title="View my shopping cart"]').trigger("mouse over");
    cy.contains("Proceed to checkout").click();
  }

  // Get Name Of Products
  productNames() {
    const getText = (ele) => {
      return Cypress._.map(ele, "InnerText");
    };

    cy.get("@productName").then(getText).should("have.length", 7);
    cy.log(getText);
  }

  validateName() {
    cy.fixture("example").then((data) => {
      cy.get("@bestSellerProducts").each((ele) => {
        const textProduct = ele.text();
        if (textProduct.includes(data.myStore.product)) {
          cy.log(textProduct);
        }
      });
    });
  }

  // Best Sellers Products
  bestSellers() {
    cy.fixture("example").then((data) => {
      cy.get("@bestSellerSection").click();
      cy.get("@bestSellerProducts").should(
        "have.length",
        data.myStore.bestSellers
      );
    });
    return this;
  }

  // Footer Contact Information:
  footerContactInfo() {
    cy.fixture("example").then((data) => {
      cy.get("@footerContactInfo").should(
        "have.length",
        data.myStore.footerContactInfo
      );
    });
    return this;
  }
}

export default MyStorePage;
