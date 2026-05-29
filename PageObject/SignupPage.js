export class SignupPage{
    /**
     * @param{import ('@playwright/test').Page}page
     */

    constructor(page){
        this.page=page
        this.TitleTxt=page.getByText('Enter Account Information')
        this.passtext=page.locator('#password')
        this.daysDD=page.locator('#days')
        this.monthsDD=page.locator('#months')
        this.yearDD=page.locator('#years')
        this.newsCheck=page.locator('#newsletter')
        this.offerCheck=page.locator('#optin')
        this.firstNameTxt=page.locator('#first_name')
        this.lastNameTxt=page.locator('#last_name')
        this.addressTxt=page.locator('#address1')
        this.countryDd=page.locator('#country')
        this.stateTxt=page.locator('#state')
        this.cityTxt=page.locator('#city')
        this.zipcodeTxt=page.locator('#zipcode')
        this.mobileNoTxt=page.locator('#mobile_number')
        this.createAccBtn=page.getByText('Create Account')
        this.sucStatus=page.getByText('Account Created!')
        this.conBtn=page.getByText('Continue')
       

    }

    async accInfo(pass,day,month,year,fname,lname,add,state,city,code,mob,countryDD){
        
        await this.passtext.fill(pass)
        await this.daysDD.selectOption(day)
        await this.monthsDD.selectOption(month)
        await this.yearDD.selectOption(year)
        await this.newsCheck.check()
        await this.offerCheck.check()
        await this.firstNameTxt.fill(fname)
        await this.lastNameTxt.fill(lname)
        await this.addressTxt.fill(add)
        await this.countryDd.selectOption(countryDD)
        await this.stateTxt.fill(state)
        await this.cityTxt.fill(city)
        await this.zipcodeTxt.fill(code)
        await this.mobileNoTxt.fill(mob)
        await this.createAccBtn.click()

    }

    async continue(){
        await this.conBtn.click()
    }
}
