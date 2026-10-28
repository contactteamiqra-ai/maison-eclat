import {test,expect} from '@playwright/test';
test.beforeEach(async({page})=>{await page.addInitScript(()=>sessionStorage.setItem('eclat-intro','seen'))});
test('selected bottle sizes and whole quantities agree with the bag',async({page})=>{
 await page.goto('/fragrance/ambre-nocturne');
 for(const [size,price] of [[30,105],[50,145],[100,210]]){
  await page.locator('.size-options').getByRole('button',{name:`${size} ml`}).click();
  await expect(page.locator('.product-gallery svg')).toContainText(`${size} ML`);
  await page.getByLabel('QUANTITY',{exact:true}).fill('1.5');
  await expect(page.getByLabel('QUANTITY',{exact:true})).toHaveValue('1');
  await page.getByRole('button',{name:`Add to bag — €${price}`,exact:true}).click();
  await page.getByLabel('Close bag').click();
 }
 await page.getByRole('button',{name:'Open bag, 3 items'}).click();
 await expect(page.locator('.bag-item')).toHaveCount(3);
 await expect(page.locator('.bag-bottom')).toContainText('€460');
 for(const size of [30,50,100])await expect(page.locator('.bag-item').filter({hasText:`${size} ml`})).toContainText(`${size} ML`);
 await page.locator('.bag-item').first().getByRole('button',{name:'Remove',exact:true}).click();
 await expect(page.locator('.bag-bottom')).toContainText('€355');
 await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).toHaveCount(0);
});
test('quick view keyboard behavior, favorites, sorting and screenshots',async({page})=>{
 await page.setViewportSize({width:1440,height:1000});await page.goto('/');await page.waitForTimeout(2000);await page.screenshot({path:'/tmp/maison-review-desktop.png'});
 await page.goto('/collection');await page.getByLabel('Sort fragrances').selectOption('low');await expect(page.locator('.product-card').first()).toContainText('Lumière d’Or');
 await page.getByLabel('Favorite Ambre Nocturne',{exact:true}).click();await page.getByRole('button',{name:'Favorites',exact:true}).click();await expect(page.locator('.product-card')).toHaveCount(1);
 await page.getByRole('button',{name:'Quick view',exact:true}).click();await expect(page.getByLabel('Close quick view')).toBeFocused();await page.keyboard.press('Shift+Tab');await expect(page.getByRole('button',{name:'Add 50 ml to bag'})).toBeFocused();await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).toHaveCount(0);
 await page.goto('/create');await expect(page.locator('canvas')).toBeVisible();await page.waitForTimeout(3000);
 for(const shape of ['Classic','Round','Slim','Grand']){await page.getByRole('button',{name:shape,exact:true}).click();await expect(page.locator('.configuration-summary')).toContainText(shape)}
 for(const cap of ['Ribbed','Square','Sphere','Dome']){await page.getByRole('button',{name:cap,exact:true}).click();await expect(page.locator('.configuration-summary')).toContainText(cap)}
 await page.getByRole('button',{name:'Reset all choices'}).click();await page.screenshot({path:'/tmp/maison-review-atelier.png',fullPage:true});
 await page.setViewportSize({width:390,height:844});await page.goto('/');await page.waitForTimeout(1500);await page.screenshot({path:'/tmp/maison-review-mobile.png',fullPage:true});
});
test('mobile story has no desktop pin spacer',async({page})=>{await page.setViewportSize({width:390,height:844});await page.goto('/');await page.waitForTimeout(1000);await expect(page.locator('.pin-spacer')).toHaveCount(0);await expect(page.locator('.top-note')).toHaveCSS('opacity','1');});
