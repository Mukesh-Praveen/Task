import{test, expect} from '@playwright/test'
import { HomePage } from '../PageObject/HomePage'
import { ProductPage } from '../PageObject/ProductPage'
import pData from '../testData/productData.json'
import cdata from '../testData/commonData.json'
test('search product',async({page})=>{
    let Title=cdata.title
    let ProName=pData.newproduct
    await page.goto('/')

    let home= new HomePage(page)
    await expect(page).toHaveTitle(Title)
    await home.productsPage()
    await expect(page).toHaveTitle(/All Products/)

    let pro= new ProductPage(page)
    await pro.searchProduct(ProName)
    await expect(pro.searchProTitle).toBeVisible()
    await expect(pro.allProduct).toHaveCount(7)

    })