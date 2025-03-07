import {BrowserContext, Locator, Page, expect} from '@playwright/test';

export default class Timeline { 
  readonly page : Page
  readonly timelineContentBlock : Locator

 

  constructor(page: Page) {
    this.page = page
    this.timelineContentBlock = page.locator('.timeline-content-block')

}

// actions

async scrollToItem(item:string , inputDevice: string) {
  if (inputDevice==="keyboard") {
    await this.page.keyboard.press('ArrowDown')
  }


}

}

