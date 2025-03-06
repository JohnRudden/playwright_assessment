import {BrowserContext, Locator, Page, expect} from '@playwright/test';

export default class Header { 
  readonly page : Page
  readonly headerSection : Locator
  readonly searchIcon: Locator
  readonly searchInputText: Locator
  readonly applySearchBtn: Locator
  readonly closeSearchBox: Locator

  constructor(page: Page) {
    this.page = page
    this.headerSection = this.page.getByRole('banner');
    this.searchIcon = this.headerSection.getByRole('button', {name: 'Open search input'});
    this.searchInputText = this.headerSection.getByRole('searchbox');
    this.applySearchBtn = this.headerSection.getByRole('button', {name: 'Apply Search'});
    this.closeSearchBox = this.headerSection.getByRole('button', {name : 'Close search input'});
}

// actions

async openSearchBox() {
  const isCloseSearchVisible = this.closeSearchBox.isVisible();
  if (!await isCloseSearchVisible) {
  await this.searchIcon.click()
};
}


async enterSearchTerm(searchTerm: string) {
  await this.searchInputText.fill(searchTerm)
};


async applySearch() { 
  await this.applySearchBtn.click();
  console.log(this.page.url())
  await this.page.waitForURL(/documents\?returning=true/) // use regex to check for url path
}
}
