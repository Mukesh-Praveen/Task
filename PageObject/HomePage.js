export class HomePage{
    /**
     * @param{import ('@playwright/test').Page}page
     */

    constructor(page){
        this.page=page
        this.homeTitle=page.getByAltText('Website for automation practice')
        this.signupLink=page.getByRole('link',{name :' Signup / Login'})
        this.logoutLink=page.getByRole('link',{name :' Logout'})
        this.productLink=page.getByRole('link',{name :' Products'})
        this.contactUsLink=page.getByRole('link',{name :'  Contact us'})
        this.userNameTxt=page.locator('//i[@class="fa fa-user"]/parent::a/b')
        this.deleteBtn=page.getByText(' Delete Account')
        this.conBtn=page.locator("//a[text()='Continue']")
        this.createState=page.locator('//b[text()="Account Created!"]')
        this.deleteState=page.locator('//b[text()="Account Deleted!"]')
        this.tcBtn=page.getByRole('button',{name :'Test Cases'})
        this.footer=page.locator('#footer')
        this.subTxt=page.getByText('Subscription')
        this.emailTxt=page.locator('#susbscribe_email')
        this.emailSearch=page.locator('#subscribe')
        this.emailMsg=page.getByText('You have been successfully subscribed!')

    }

    async signup(){
        await this.signupLink.click()
    }
    async delAcc(){
        await this.deleteBtn.click()
    }
    async continue(){
        await this.conBtn.click()
    }
    async logOutAcc(){
        await this.logoutLink.click()
    }

    async contactUsPage(){
        await this.contactUsLink.click()
    }
    async testCasePage(){
        await this.tcBtn.click()
    }
    async productsPage(){
        await this.productLink.click()
    }

    async navigateFooter(){
        await this.footer.scrollIntoViewIfNeeded()
    }

    async sendMail(email){
        await this.emailTxt.fill(email)
        await this.emailSearch.click()
    }
}