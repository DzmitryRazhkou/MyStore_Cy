class EveningDresses {
  selectSize(size) {
    cy.get("div.layered_filter").find("ul label a").should("have.length", 11);
    if (size == "L") {
      cy.get("#layered_id_attribute_group_3").click();
    } else {
      cy.get("#layered_id_attribute_group_2").click();
    }
  }

  selectColor(color) {
    if (color == "Beige") {
      cy.get("#layered_id_attribute_group_7").click();
    } else {
      cy.get("#layered_id_attribute_group_24").click();
    }
  }

  validateProduct(productName, message) {
    cy.get(
      "div[class='product-container'] div[class='right-block'] h5 a[title]"
    ).each((ele) => {
      const txt = ele.text();
      if (txt == productName) {
        cy.log(txt);
      }
    });
    cy.get(".top-pagination-content > .product-count").then((ele) => {
      const text = ele
        .text()
        .replace(/[\n \t]/g, " ")
        .trim();
      expect(text).includes(message);
    });
  }

  // Click On The Home Button:
  clickOnHomeButton() {
    cy.fixture("example").then((data) => {
      cy.get(".home").click();
      cy.title().should("equal", data.myStore.myStorePageTitle);
    });
    return this;
  }

  // Right Slider:
  rightSlider() {
    cy.get("#layered_price_slider :nth-child(2)").invoke(
      "attr",
      "style",
      "left: 0%;"
    );
    cy.get("#layered_price_slider :nth-child(3)").invoke(
      "attr",
      "style",
      "left: 27%;"
    );
  }
}

export default EveningDresses;
