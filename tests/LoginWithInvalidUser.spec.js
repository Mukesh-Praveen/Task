import {test,expect} from '@playwright/test'
import {HomePage} from '../PageObject/HomePage'
import { LoginPage } from '../PageObject/LoginPage'
import idata from '../testData/invalidData.json'
import cdata from '../testData/commonData.json'

test('Login With InvalidUser',async({page})=>{
    let Pass=idata.password
    let Email=idata.email
    let Title=cdata.title
     
    await page.goto('/')

    let home= new HomePage(page)
    await expect(page).toHaveTitle(Title)
    await home.signup()

    let login=new LoginPage(page)
    await expect(login.signTitle).toBeVisible()
     await login.loginAcc(Email,Pass)

    await expect(login.errorStat).toBeVisible()

})