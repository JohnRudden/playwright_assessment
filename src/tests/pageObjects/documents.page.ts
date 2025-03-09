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


async getPageNumber(location : string) {
  const locatorToUse = location === "top" ? this.pageNumbersTop : this.pageNumbersBottom
  return await locatorToUse.inputValue();
}

async getAllListItems() {
  const listItems = await this.listItem.all();
  return listItems;
}

async validateListItemNumber(itemNumber: number, criteria: string) {
  const list = await this.getAllListItems();
  expect(list[itemNumber]).toHaveText(criteria);
}

async validateSearchResults(criteria: string) {
  const locateCriteriaItem = this.tabPanel.getByText(criteria);
  await expect(locateCriteriaItem).toBeVisible();
  expect(await locateCriteriaItem.textContent()).toEqual(criteria)
}

async verifyDisplayedPageNumber(checkValue: (string | number)) {
  const pageNumberToCheck = typeof checkValue === 'string' ? parseInt(checkValue) : checkValue;
  const actualPageNumberDisplayed = parseInt(await this.getPageNumber('top'));
  expect(pageNumberToCheck).toEqual(actualPageNumberDisplayed);
}
}

