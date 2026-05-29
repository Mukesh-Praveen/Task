import {test,expect}from '../Fixture/LoginFixture'
import { HomePage } from '../PageObject/HomePage'
import cdata from '../testData/commonData.json'

test('Login User and delete acc',async({loggedInPage})=>{
    let Title=cdata.title
    let home=new HomePage(loggedInPage)
     await expect(loggedInPage).toHaveTitle(Title)
     await home.delAcc()
    await expect(home.deleteState).toBeVisible()
    await home.continue()


})