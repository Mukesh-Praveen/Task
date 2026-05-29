import{test, expect} from '@playwright/test'
import { HomePage } from '../PageObject/HomePage'
import conData from '../testData/contactUsData.json'
import cdata from '../testData/commonData.json'

test('verify subscription',async({page})=>{
    let Title=cdata.title
    let Email=conData.email

    await page.goto('/')

    let home= new HomePage(page)
    await expect(page).toHaveTitle(Title)
    await home.navigateFooter()
    await expect(home.subTxt).toBeVisible()
    await home.sendMail(Email)
    await expect(home.emailMsg).toBeVisible()


})