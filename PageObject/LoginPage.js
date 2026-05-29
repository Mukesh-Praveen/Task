export class LoginPage{
    /**
     * @param{import ('@playwright/test').Page}page
     */

    constructor(page){
        this.page=page
        this.signTitle=page.getByText('New User Signup!')
        this.loginTitle=page.getByText('Login to your account')
        this.nameTxt=page.getByPlaceholder('Name')
        this.emailTxt=page.getByPlaceholder('Email Address',{exact:true}).last()
        this.signupBtn=page.getByRole('button',{name:'Signup'})
        this.email1Txt=page.getByPlaceholder('Email Address',{exact:true}).first()
        this.passTxt=page.getByPlaceholder('Password')
        this.loginBtn=page.getByRole('button',{name:'Login'})
        this.errorStat=page.getByText('Your email or password is incorrect!')
        this.dupStat=page.getByText('Email Address already exist!')
        
    }


async signupAcc(Name,Email){
    await this.nameTxt.fill(Name)
    await this.emailTxt.fill(Email)
    await this.signupBtn.click()
}

async loginAcc(Email,Pass){
    await this.email1Txt.fill(Email)
    await this.passTxt.fill(Pass)
    await this.loginBtn.click()

}
}