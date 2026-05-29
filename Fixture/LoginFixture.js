import {test as base} from '@playwright/test'
import {LoginPage} from '../PageObject/LoginPage'
import { HomePage } from '../PageObject/HomePage'
import cdata from '../testData/commonData.json'

export let test=base.extend({
    loggedInPage : async({page},use)=>{
        let Email= cdata.email
        let Pass=cdata.password

        
        await page.goto('/',{waitUntil:'domcontentloaded'})

        let home= new HomePage(page)
        
        await home.signup()
        let login=new LoginPage(page)
        await login.loginAcc(Email,Pass)
        await use(page)
    }
})

export {expect} from '@playwright/test'