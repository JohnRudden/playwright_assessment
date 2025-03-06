import { Given, When, Then } from '../fixtures/fixtures';

Given('the user is on the {string} page of the Quartex Published Site', async ({siteNavigation}, arg : string) => {
 await siteNavigation.goto(arg)
});


When('the user enters the text {string} in the basic input search box in the header', async ({header}, arg: string = "") => {
  await header.openSearchBox();
  await header.enterSearchTerm(arg);
});

When('the search button is pressed' , async({header}) => {
  await header.applySearch();
})

Then("the user is navigated to the {string} page", async({siteNavigation, baseURL}, arg1: string = "") => {
 await siteNavigation.checkSuccess(baseURL = "", arg1)
})

Then('the first page of search results is displayed', async ({}) => {
  
});

