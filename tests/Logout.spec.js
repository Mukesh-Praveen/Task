import {test,expect}from '../Fixture/LoginFixture'
import { HomePage } from '../PageObject/HomePage'
import { LoginPage } from '../PageObject/LoginPage'
import cdata from '../testData/commonData.json'


test('Logout user',async({loggedInPage})=>{
    let Title=cdata.title
    let home=new HomePage(loggedInPage)
    await expect(loggedInPage).toHaveTitle(Title)

    await home.logOutAcc()
    let login=new LoginPage(loggedInPage)
    await expect(login.loginTitle).toBeVisible()

})