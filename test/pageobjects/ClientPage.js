const LoginPage =  require ('../pageobjects/LoginPage')
const ClientPage = require ('..pageobjects/ClientPage')
const { browser } = require('@wdio/cli/build/constants')
describe ('Clients test'), () => {
    beforeEach( async()=>{
        await browser.url(browser.options.baseUrl + 'login');
        await LoginPage.doLogin();
    })

It ('should create new client', async ()=> {
await ClientPage.createClientsButton.click();
await (await ClientPage.surnameField).setValue
await browser.pause(5000);
})
}