import { test as base, createBdd } from 'playwright-bdd';
import SiteNavigation  from '../pageObjects/siteNavigation.page.ts';
import Header from '../pageObjects/header.page.ts';
import Documents from '../pageObjects/documents.page.ts';
import ToastMessage from '../pageObjects/toastMessage.page.ts'; 
import Timeline from '../pageObjects/timeline.page.ts'

type pageObjects = {
  siteNavigation: SiteNavigation,
  header: Header,
  documents: Documents,
  toastMessage: ToastMessage,
  // timeline: Timeline
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
  },
  toastMessage: async({page}, use) => {
    await use(new ToastMessage(page))
  },
  // timeline: async({page}, use) => {
  //   await use(new Timeline(page))
  // }
});

export const { Given, When, Then } = createBdd(test);