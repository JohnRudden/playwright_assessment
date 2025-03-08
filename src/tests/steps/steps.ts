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

When('the user selects the {string} level menu option {string} using a {string}', async ({siteNavigation, browserName}, level: string, item:string, inputDevice: string) => {
 await siteNavigation.selectMenuOption(level, item, inputDevice, browserName);
});

When('the user scrolls to a {string} using a {string}', async ({siteNavigation}, item: string, inputDevice: string) => {
  await siteNavigation.scrollToItem(item, inputDevice);
});

When('the user selects the link {string} using a {string}', async ({siteNavigation, browserName}, linkName: string, inputDevice: string) => {
  const link = await siteNavigation.getLinkByName(linkName);
  await siteNavigation.navigateToAndSelect(link, inputDevice, browserName);
});

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

Then('the correct web page {string} is launched in a new tab', async ({siteNavigation}, webPage: string, newtabExpected: boolean = true) => {
 await siteNavigation.verifyCorrectURL(webPage, newtabExpected);
});
