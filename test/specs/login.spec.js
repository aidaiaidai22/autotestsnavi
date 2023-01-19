const LoginPage = require('../pageobjects/LoginPage');

describe('Login page on Navigator CRM',()=> {
    beforeEach('Setup browser', async() => {
        await browser.url('http://167.114.201.175:5000/login')
    }) 
    afterEach('Clear browser', async()=>{
        await browser.reloadSession();
    })
  
    it('should login', async () => {
        await LoginPage.loginField.setValue('Admin');
        await LoginPage.passwordField.setValue('Admin@Navi');
        await LoginPage.submitButton.click();
        await LoginPage.createClientButton.waitForDisplayed({ timeout: 10000 });
        await expect(browser).toHaveUrlContaining('clients')
    })
   
})
