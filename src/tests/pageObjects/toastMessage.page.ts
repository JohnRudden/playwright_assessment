import {BrowserContext, Locator, Page, expect} from '@playwright/test';

export default class ToastMessage { 
  readonly page : Page
  readonly toastMessage : Locator

  constructor(page: Page) {
    this.page = page;
    this.toastMessage = page.getByRole('alert');
}

// actions

async validateMessage(text: string) {
  await this.page.waitForLoadState("domcontentloaded");
  await expect(this.toastMessage).toBeVisible();
  expect(await this.toastMessage.textContent()).toEqual(text);
}
}