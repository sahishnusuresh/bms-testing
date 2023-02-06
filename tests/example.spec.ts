import { test, expect, Page, Browser, BrowserContext } from '@playwright/test';
import commandLineArgs from "command-line-args"
// const arguments =process.argv
const optionDefinitions = [
  
  { name: 'city', type: String},
  { name: 'movie', type: String }
]

const options = commandLineArgs(optionDefinitions)

test('book a ticket',async({browser}:{browser:Browser}):Promise<void>=>{
  const context=await browser.newContext()
  const page=await context.newPage()
  await context.grantPermissions(['geolocation'])
  await page.goto('https://in.bookmyshow.com/');
  await page.getByRole('img', { name: options[0]['city'], exact: true }).click();
  await page.getByRole('img', { name: options[0]['movie'] }).click();
  await page.getByRole('button', { name: 'Book tickets' }).click();
  await page.getByText('2D',{exact: true}).nth(2).click()
  

await page.getByRole('link').filter({hasText:'04:30 PM'}).click()



  
  //  await page.getByRole('link',{name:'1:30 PM'}).click() 
  await page.locator('#btnPopupAccept').click()
  await page.locator('#pop_2').click()
  await page.getByText('Select Seats').click()
  

const seats= page.locator('#A_1_01 > a._available')
const no_of_seats=await seats.count() // to get number of available seats
let no_selected=1 // to prevent selection more than once
for(let i=0;i<=no_of_seats;i++){
  const seat=seats.nth(i);
  if(no_selected==1){
    expect(seat).toBeDefined()
    await seat.click()
    break;
  }
    // await page.pause()
}


  await page.getByRole('link',{name:'Pay Rs.300.00'}).click()

})