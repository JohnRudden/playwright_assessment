import {Locator, Page, expect} from '@playwright/test';

export default class SiteNavigation { 
  readonly page : Page
  readonly cookieAcceptBtn: Locator

  constructor(page: Page) {
    this.page = page
    this.cookieAcceptBtn = this.page.getByRole('button', {name: "dismiss cookie message"})
}

// actions

// Accept cookies if visible
async acceptCookies() {
  const cookieAccept = this.cookieAcceptBtn;
  if (await cookieAccept.isVisible()) {
    await cookieAccept.click();
  }
}

// go to to any page specified specified in the argument
async goto(page : string = "") {
  const targetPage = page === "homepage" ? "" : page;
  await this.page.goto(`/${ targetPage}`);
  await this.page.waitForURL(`/${ targetPage}`);
  await this.acceptCookies();
};

//assert navigated to the correct page
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

// navigate to a main menu iten using either a mouse or keyboard
async mainMenuNavigation(menu: string, inputDevice: string, ) {
  const menuLocator = this.page. getByRole('button', { name: `${menu}` })
  if (inputDevice==="keyboard") {
    let focused = false;
    while (!focused) {
    await this.page.keyboard.press('Tab');
    focused = await menuLocator.evaluate((el) => document.activeElement === el)
    } 
    } else {
      await menuLocator.hover();
    }
  }


// open menu
async openMenuItem(menuItem: string, inputDevice: string) {
  if (inputDevice==="keyboard") {
  await this.page.keyboard.press('Enter');
    } else {
      // await this.page.getByRole('button', { name: `${menuItem}` }).click();
      await this.page.getByText(menuItem).first().click();
    }
  }

// select link
async selectMenuLink(menuItem: string, inputDevice: string) {
  const menuLocator = this.page.getByRole('link', { name: menuItem});
  console.log(await menuLocator.textContent());
  console.log("Input device =", inputDevice);
  console.log("Menu items is ", menuItem);
  let focused = false;
  if (inputDevice==="keyboard") {
    while (!focused) {
    await this.page.keyboard.press('Tab');
    focused = await menuLocator.evaluate((el) => document.activeElement === el);
    console.log(focused)
    }
    await this.page.keyboard.press('Enter');
  } else {
    await menuLocator.click();
  }

}
}
