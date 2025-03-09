import {Locator, Page, expect} from '@playwright/test';

export default class SiteNavigation { 
  readonly page : Page
  readonly cookieAcceptBtn: Locator
  readonly siteMainMenu: Locator

  constructor(page: Page) {
    this.page = page
    this.cookieAcceptBtn = this.page.getByRole('button', {name: "dismiss cookie message"})
    this.siteMainMenu = this.page.getByTestId('site-main-menu')
}

// actions

// **** Accept cookies if visible ****
async acceptCookies() {
  const cookieAccept = this.cookieAcceptBtn;
  if (await cookieAccept.isVisible()) {
    await cookieAccept.click();
  }
}

// **** Go to to any page specified specified in the argument ****
async goto(page : string = "") {
  const targetPage = page === "homepage" ? "" : page;
  await this.page.goto(`/${targetPage}`);
  await this.page.waitForURL(`/${targetPage}`);
  await this.acceptCookies();
};

// ****Assert page navigation ****
async checkSuccess(baseURL: string, arg1: string) {
    const currentUrl = this.page.url();
    let assertURL: string = baseURL ? baseURL : "https://demo.quartexcollections.com/"
    switch (arg1) {
      case "Home Page":
        assertURL
        break;
      case "Browse All":
        assertURL = `${assertURL}${'documents?returning=true'}` // need to update this - is it navigating as part of search or direct click on link?
        break;
      default:
        assertURL = `${assertURL}${arg1}`
}
  expect(currentUrl).toEqual(assertURL)
  if (arg1 != "Home Page") {
   await expect(this.page.getByRole("heading", { name: arg1 })).toBeVisible();
  }
}

// **** Navigate to a menu option in the Main Site Menu using either a mouse or keyboard ****
async selectMenuOption(menu: string, inputDevice: string, browserName: string) {
  const menuLocator = menu === "Discovery Aids" ? this.siteMainMenu.getByRole('button', { name: `${menu}` }) : this.siteMainMenu.getByRole('link', { name: menu});
  await this.navigateToAndSelect( menuLocator , inputDevice, browserName);
}

// **** Scroll to an item using keyboard or mouse ****
  async scrollToItem(item:string , inputDevice: string) {
    const elementToCheck = this.page.getByText(item);
    let isVisible = false
    if (inputDevice==="keyboard") {
      while (!isVisible) {
        isVisible = await elementToCheck.isVisible();
        await this.page.keyboard.press('PageDown');
        await this.page.waitForLoadState('networkidle');
      } 
    } else {
      while (!isVisible) {
        isVisible = await elementToCheck.isVisible();
        await this.page.mouse.wheel(0, 500);
    }
    await this.page.waitForLoadState('networkidle');
  }
  }

// **** Get a link by any name ****
async getLinkByName(linkName: string) {
  return this.page.getByRole('link', { name: linkName })
}

// **** Navigate to an item and select ****
async navigateToAndSelect(itemLocator: Locator, inputDevice: string, browserName: string ) {
  if (inputDevice==="keyboard" && browserName != "webkit") {     // Tabs do not appear to be working as expected on Webkit (not going through the menu items)
    let focused = false;
    while (!focused) {
      await this.page.keyboard.press('Tab');
      focused = await itemLocator.evaluate((el) => document.activeElement === el)
       }  
        await this.page.keyboard.press('Enter');
      }
     else {
      await itemLocator.click();
    }
}

// **** Verify URL on same page or new page ****
async verifyCorrectURL(urlTocheck: string, newtabExpected: boolean) {
  if (newtabExpected) {
      const context = this.page.context();
      const newTabPromise = this.page.waitForEvent("popup");
      const newTab = await newTabPromise;
      await newTab.waitForLoadState();
      await newTab.waitForURL(urlTocheck);
      expect(newTab.url()).toEqual(urlTocheck);
  } else {
      expect(this.page.url()).toEqual(urlTocheck);
  }
}
}
