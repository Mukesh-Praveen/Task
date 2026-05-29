export class ContactUsPage{
    /**
     * @param{import ('@playwright/test').Page}page
     */

    constructor(page){
        this.page=page
        this.touchTitle=page.getByText('Get In Touch')
        this.nameTxt=page.getByPlaceholder('Name')
        this.EmailTxt=page.getByPlaceholder('Email').first()
        this.subTxt=page.getByPlaceholder('Subject')
        this.messTxt=page.getByPlaceholder('Your Message Here')
        this.uploadFile=page.locator('//input[@name="upload_file"]')
        this.submitBtn=page.getByRole('button',{name:'submit'})
        this.succMsg=page.locator('.status.alert-success')
        this.homeBtn=page.getByText(' Home')
        this.sucMsg=page.locator('//div[@class="status alert alert-success"]')
    }

    async contactUsForm(name,email,subject,message,filepath){
        await this.nameTxt.fill(name)
        await this.EmailTxt.fill(email)
        await this.subTxt.fill(subject)
        await this.messTxt.fill(message)
        await this.uploadFile.setInputFiles(filepath)
        await this.submitBtn.click()
    }

    async navigateToHome(){
        await this.homeBtn.click()
    }
}