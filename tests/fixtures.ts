import { test as base } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { ProductsPage } from './pages/ProductsPage';
import { CartComponent } from './pages/CartComponent';

type MyFixtures = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  cartComponent: CartComponent;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  cartComponent: async ({ page }, use) => {
    await use(new CartComponent(page));
  },
});

export { expect } from '@playwright/test';
