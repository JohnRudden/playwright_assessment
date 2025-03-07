import { Given, When, Then } from '../fixtures/fixtures';

//  **** GIVEN steps ****

Given('the user is on the {string} page of the Quartex Published Site', async ({siteNavigation}, arg : string) => {
 await siteNavigation.goto(arg)
});



//  **** WHEN steps ****

// Used in Feature 1

When('the user enters the text {string} in the basic input search box in the header', async ({header}, arg: string = "") => {
  await header.openSearchBox();
  await header.enterSearchTerm(arg);
});

When('the apply search button is pressed' , async({header}) => {
  await header.applySearch();
})

When('the open search button is pressed' , async({header}) => {
  await header.openSearchBox();
})

// Used in feature 2

When('the user has navigated to {string} using a {string}', async ({siteNavigation}, item:string, inputDevice: string) => {
 await siteNavigation.mainMenuNavigation(item, inputDevice);
});

When('the user opens menu item {string} using a {string}', async ({siteNavigation}, inputDevice: string, menuItem: string) => {
  await siteNavigation.openMenuItem(inputDevice, menuItem);
});

When('the user selects the link {string} using a {string}', async ({siteNavigation}, menuItem: string, inputDevice: string,) => {
  await siteNavigation.selectMenuLink(menuItem, inputDevice )
});

// When('the user navigates to a <timeline item> using a <inputDevice>', async ({}) => {
//   // Step: When the user navigates to a <timeline item> using a <inputDevice>
//   // From: src\tests\features\navigateToSpecificLink.feature:10:5
// });

// When('the user selects the link <link> using a <inputDevice>', async ({}) => {
//   // Step: And the user selects the link <link> using a <inputDevice>
//   // From: src\tests\features\navigateToSpecificLink.feature:11:5
// });

// Then('the correct <web page> is launched in a new tab', async ({}, dataTable: DataTable) => {
//   // Step: Then the correct <web page> is launched in a new tab
//   // From: src\tests\features\navigateToSpecificLink.feature:12:5
// });


//  **** THEN steps ****

Then("the user is navigated to the {string} page", async({siteNavigation, baseURL}, arg1: string = "") => {
 await siteNavigation.checkSuccess(baseURL = "", arg1)
})

Then("the url contains the text {string}", async({header}, text: string) => {
  await header.verifyUrl(text);
});

Then('the {string} page of search results is displayed', async ({documents}, pageNumberToCheck: string) => {
 await documents.verifyDisplayedPageNumber(pageNumberToCheck);
});

Then('the {string} meets the search criteria', async ({documents}, criteria: string) => {
  await documents.validateSearchResults(criteria);
});

Then('an alert message appears with the text {string}', async ({toastMessage}, msg: string) => {
 await toastMessage.validateMessage(msg);
});

