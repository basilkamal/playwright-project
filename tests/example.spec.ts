import { test, expect } from './fixtures';

test('open The Web Site', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('successful login', async ({ page, loginPage }) => {
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory.html/);
});

test('add product to cart', async ({ loginPage, productsPage, cartComponent }) => {
  await loginPage.login('standard_user', 'secret_sauce');
  await productsPage.addProductToCart('sauce-labs-backpack');
  await expect(cartComponent.badge).toHaveText('1');
});

test('locked out user cannot login', async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.enterUsername('locked_out_user');
  await loginPage.enterPassword('secret_sauce');
  await loginPage.clickLogin();
  await expect(loginPage.errorMessage).toBeVisible();
});