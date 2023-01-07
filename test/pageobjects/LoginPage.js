class LoginPage {
    get loginField () { return $('input[name="userName"]') }
    get passwordField () {return $ ('input[name="password"]') }
    get submitButton () {return $ ('button[type="submit"]') }
   
    async doLogin(userName="Admin", password="Admin@Navi"){
        await this.loginField.setValue(userName);
        await this.passwordField.setValue(password);
        await this.submitButton.click();
    }
}

module.exports= new LoginPage ()