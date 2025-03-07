import { Given, When, Then } from '../fixtures/fixtures';

//  **** GIVEN steps ****

Given('the user is on the {string} page of the Quartex Published Site', async ({siteNavigation}, arg : string) => {
 await siteNavigation.goto(arg)
});



//  **** WHEN steps ****

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

