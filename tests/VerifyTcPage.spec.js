import{test, expect} from '@playwright/test'
import { HomePage } from '../PageObject/HomePage'
import cdata from '../testData/commonData.json'

test('verify test case page',async({page})=>{
    let Title=cdata.title
     await page.goto('/')

    let home= new HomePage(page)
    await expect(page).toHaveTitle(Title)
    await home.testCasePage()
    await expect(page).toHaveTitle(/Test Cases/)
})