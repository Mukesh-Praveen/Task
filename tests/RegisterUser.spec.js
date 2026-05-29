import{test,expect} from '@playwright/test'
import  sdata from '../testData/signUpData.json'
import cdata from '../testData/commonData.json'
import { HomePage } from '../PageObject/HomePage'
import { LoginPage } from '../PageObject/LoginPage'
import { SignupPage } from '../PageObject/SignupPage'


test('register user',async({page})=>{
    let Pass= sdata.password
    let Day=sdata.day
    let Month=sdata.month
    let Year=sdata.year
    let Fname=sdata.fname
    let Lname=sdata.lname
    let Add=sdata.add
    let State=sdata.State
    let City=sdata.City
    let Code=sdata.code
    let Mob=sdata.mob
    let CountryDD=sdata.countryDD
    let Name=cdata.username
    let Email=cdata.remail
    let Title=cdata.title

    await page.goto('/')

    let home= new HomePage(page)
    await expect(page).toHaveTitle(Title)
    await home.signup()
    
    let login=new LoginPage(page)
    await expect(login.signTitle).toBeVisible()
    await login.signupAcc(Name,Email)

    let sign=new SignupPage(page)
    await expect(sign.TitleTxt).toBeVisible()
    await sign.accInfo(Pass,Day,Month,Year,Fname,Lname,Add,State,City,Code,Mob,CountryDD)

    await expect(home.createState).toBeVisible()
    await home.continue()
    //await expect(page).toHaveTitle(Title)
    // await home.delAcc()
    // await expect(home.deleteState).toBeVisible()
    // await home.continue()


})
