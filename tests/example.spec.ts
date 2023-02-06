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
  // const times=await page.$$eval('a',(elements:HTMLInputElement)=>{
  //   return elements.filter(element=>{})
  // }
    
//   
// var arr :Array<HTMLLinkElement>|Array<HTMLAnchorElement>= [], l = window.document.links;
// for(var i=0; i<l.length; i++) {
//   if(l[i].innerHTML=='04:30 PM'){
//     arr.push(l[i].href)
//   }
// }
// await page.click(arr[0])
// await page.$$eval('a.showtime-pill',links=>
//       links.forEach(async(link)=>{
//         if(link instanceof HTMLLinkElement && link.className=='__text' && link.textContent=='04:30 PM'){
//           await link.click()
//         }
//       }

//       ))
await page.getByRole('link').filter({hasText:'04:30 PM'}).click()



  
  //  await page.getByRole('link',{name:'1:30 PM'}).click() 
  await page.locator('#btnPopupAccept').click()
  await page.locator('#pop_2').click()
  await page.getByText('Select Seats').click()
  await page.$$eval('._available', (seats)=>{
    console.log('hi')
    let count=0;
    seats.forEach((seat)=>{
      while(count<=2){
      if(seat.parentElement?.hasAttribute('id=A_1_01')){
         page.locator('#A_8_11').getByText('9').click()
        count+=1;
      }
    }
      // await page.click(seat)
    })})
  var str="#[A-Z]_1_[10-20]"

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