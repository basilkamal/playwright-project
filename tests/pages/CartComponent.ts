import { Page, Locator } from '@playwright/test';

export class CartComponent {
  readonly page: Page;
  readonly badge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.badge = page.locator('.shopping_cart_badge');
  }
}