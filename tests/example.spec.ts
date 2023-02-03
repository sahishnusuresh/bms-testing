import { test, expect, Page, Browser, BrowserContext } from '@playwright/test';

test('book a ticket',async({browser}:{browser:Browser}):Promise<void>=>{
  const context=await browser.newContext()
  const page=await context.newPage()
  await context.grantPermissions(['geolocation'])
  await page.goto('https://in.bookmyshow.com/');
  await page.getByRole('img', { name: 'BANG', exact: true }).click();
  await page.getByRole('img', { name: 'Pathaan' }).click();
  await page.getByRole('button', { name: 'Book tickets' }).click();
  await page.getByText('2D',{exact: true}).nth(2).click()

  await page.getByRole('link',{name:'1:30 PM'}).click()
  await page.locator('#btnPopupAccept').click()
  await page.locator('#pop_1').click()
  await page.getByText('Select Seats').click()
  await page.locator('#A_1_08').getByText('8').click()
  await page.getByRole('link',{name:'Pay Rs.150.00'}).click()

})