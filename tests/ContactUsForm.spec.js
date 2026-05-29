import {test,expect} from '@playwright/test'
import {HomePage} from '../PageObject/HomePage'
import { LoginPage } from '../PageObject/LoginPage'
import { ContactUsPage } from '../PageObject/ContactUsPage'
import conData from '../testData/contactUsData.json'
import cdata from '../testData/commonData.json'
import path from 'path'


test('contact us form',async({page})=>{
    let Name=conData.name
    let Email=conData.email
    let Subject=conData.subject
    let Message=conData.message
    let Title=cdata.title

    let Filepath=path.join(__dirname,'../UploadFile/Flipkart EPIC.docx')
     
    page.on('dialog',dialog=>dialog.accept())

    await page.goto('/',{waitUntil:'domcontentloaded'})

    let home= new HomePage(page)

    await expect(page).toHaveTitle(Title)
   
    await home.contactUsPage()

    let con=new ContactUsPage(page)
    await expect(con.touchTitle).toBeVisible()

    await con.contactUsForm(Name,Email,Subject,Message,Filepath)
    
    await con.navigateToHome()
    await expect(page).toHaveTitle(Title)



})
