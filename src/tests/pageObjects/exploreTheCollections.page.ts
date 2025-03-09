import {Locator, Page, expect} from '@playwright/test';

export default class ExploreTheCollections { 
  readonly page : Page
  readonly browseCollectionNav: Locator
  readonly collectionsContainer: Locator

  constructor(page: Page) {
    this.page = page
    this.browseCollectionNav = this.page.getByRole('navigation' , {name: 'Browse by collection Name, A to Z Text Block'})
    this.collectionsContainer = this.page.locator('.view__main__inner');
}

async selectLetterIfEnabled(letter:string) {
  await this.browseCollectionNav.scrollIntoViewIfNeeded();
  await this.page.waitForLoadState('load');
  await expect(this.browseCollectionNav.locator(`li[data-letter='${letter}']`) , `Cannot browse by letter ${letter} as it is not enabled`).not.toHaveAttribute('aria-hidden' , 'true');
  return this.browseCollectionNav.getByRole('listitem').filter({ hasText: `${letter}` })
}

async validateLetterHeadingInViewport(letter: string) {
 const letterCollectionHeading= this.collectionsContainer.getByRole('heading', {name: `${letter}`, exact: true});
 await expect(letterCollectionHeading).toBeInViewport();
}

async validateCollectionInViewport(collection: string) {
  const collectionLink = this.collectionsContainer.getByRole('link', {name: `${collection}`});
  await expect(collectionLink).toBeInViewport();
 }
}
