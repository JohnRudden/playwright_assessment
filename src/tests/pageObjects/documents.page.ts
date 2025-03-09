import {BrowserContext, Locator, Page, expect} from '@playwright/test';

export default class Documents { 
  readonly page : Page
  readonly tabPanel: Locator
  readonly pageNumbersTop : Locator
  readonly pageNumbersBottom : Locator
  readonly mediaListContainer: Locator
  readonly listItem: Locator
 

  constructor(page: Page) {
    this.page = page
    this.tabPanel = page.getByRole('tabpanel');
    this.pageNumbersTop = this.tabPanel.getByRole('spinbutton', {name: 'Page number input'}).first();
    this.pageNumbersBottom = this.tabPanel.getByRole('spinbutton', {name: 'Page number input'}).last();
    this.mediaListContainer = this.tabPanel.getByTestId('documentSearchResultContainer');
    this.listItem = this.mediaListContainer.getByRole('list');
}

// **** actions ****

/**
 * Returns the current page number on the search document tab page
 * @function
 * @param {string} location - "top" or "bottom" page number selector
 */
async getPageNumber(location : string) {
  const locatorToUse = location === "top" ? this.pageNumbersTop : this.pageNumbersBottom
  return await locatorToUse.inputValue();
}

/**
 * Returns all the list items on the search document tab page
 * @function
 */
async getAllListItems() {
  const listItems = await this.listItem.all();
  return listItems;
}

/**
 * Returns the current page number on the search document tab page
 * @function
 * @param {number} itemNumber - index of item number in the list
 * @param {string} criteria   - check item number has text based on criteria match
 */
async validateListItemNumber(itemNumber: number, criteria: string) {
  const list = await this.getAllListItems();
  expect(list[itemNumber]).toHaveText(criteria);
}

/**
 * Validate that the search results have text which match the criteria
 * @function
 * @param {string} criteria - Criteria to check the search results against
 */
async validateSearchResults(criteria: string) {
  const locateCriteriaItem = this.tabPanel.getByText(criteria);
  await expect(locateCriteriaItem).toBeVisible();
  expect(await locateCriteriaItem.textContent()).toEqual(criteria)
}

/**
 * Verify that the results displayed page number matches the value to check for
 * @function
 * @param {string | number} checkValue - Criteria to check the search results against. 
 */
async verifyDisplayedPageNumber(checkValue: (string | number)) {
  const pageNumberToCheck = typeof checkValue === 'string' ? parseInt(checkValue) : checkValue;
  const actualPageNumberDisplayed = parseInt(await this.getPageNumber('top'));
  expect(pageNumberToCheck).toEqual(actualPageNumberDisplayed);
}
}

