// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("launch", () => {
  cy.viewport("macbook-16");
  cy.log(" =====> User navigates on the MyStore page <===== ");
  cy.visit(Cypress.env("url"));
});

//
//
// -- This is a parent command --
Cypress.Commands.add(
  "createNewAccount",
  (
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
  ) => {
    getFirstName().type(firstName);
    getLastName().type(lastName);
    getPassword().type(password);
    getDays().select(days);
    getMonth().select(months);
    getYears().select(years);
    getCompany().type(company);
    getAddreessFirstLine().type(addressFirstLine);
    getAddreessSecondLine().type(addressSecondLine);
    getCity().type(city);
    getState().select(state);
    getZip().type(zipCode);
    getAdditionalInfo().type(addInfo);
    getHomePhone().type(phone);
    getMobilePhone().type(phone);
    getSubmitCreateAccountButton().click();
  }
);

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
