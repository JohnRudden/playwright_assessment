import { test as base, createBdd } from 'playwright-bdd';
import SiteNavigation  from '../pageObjects/siteNavigation.page.ts';
import Header from '../pageObjects/header.page.ts'
import Documents from '../pageObjects/documents.page.ts'

type pageObjects = {
  siteNavigation: SiteNavigation,
  header: Header,
  documents: Documents,
}

export const test = base.extend<pageObjects>({
  siteNavigation: async ({ page }, use) => {
    await use(new SiteNavigation(page))
  },
  header: async({page}, use) => {
    await use(new Header(page))
  },
  documents: async({page}, use) => {
    await use(new Documents(page))
  }
});

export const { Given, When, Then } = createBdd(test);