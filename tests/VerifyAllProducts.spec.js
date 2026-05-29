import{test, expect} from '@playwright/test'
import { HomePage } from '../PageObject/HomePage'
import { ProductPage } from '../PageObject/ProductPage'
import pData from '../testData/productData.json'
import cdata from '../testData/commonData.json'

test('verify all products',async({page})=>{
    let Title=cdata.title
    let Name=pData.expname
    let Category=pData.expcategory
    let price=pData.price
    let Availabilty=pData.availability
    let Condition=pData.condition
    let Brand=pData.brand

     await page.goto('/',{waitUntil:'domcontentloaded'})

    let home= new HomePage(page)
    await expect(page).toHaveTitle(Title)
    await home.productsPage()
    await expect(page).toHaveTitle(/All Products/)

    let pro= new ProductPage(page)
    await pro.firstProPage()
    await expect(pro.price).toContainText(price)
    await expect(pro.avail).toContainText(Availabilty)
    await expect(pro.cond).toContainText(Condition)
    await expect(pro.brand).toContainText(Brand)


})