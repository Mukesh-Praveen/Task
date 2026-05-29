import{test,expect} from '@playwright/test'
import {HomePage} from '../PageObject/HomePage'
import { LoginPage } from '../PageObject/LoginPage'
import cdata from '../testData/commonData.json'

test('Register Duplicate User',async({page})=>{
    let Name=cdata.username
    let Email=cdata.email
    let Title=cdata.title

    await page.goto('/')
    
    let home= new HomePage(page)
    await expect(page).toHaveTitle(Title)
    await home.signup()

    let login=new LoginPage(page)
    await expect(login.signTitle).toBeVisible()
    await login.signupAcc(Name,Email)
    await expect(login.dupStat).toBeVisible()
    
})