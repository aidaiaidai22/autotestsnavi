const { SUPPORTED_BROWSER_RUNNER_PRESETS } = require("@wdio/cli/build/constants");
const LoginPage = require("../pageobjects/LoginPage");

describe('Clients test',()=> {

    it('should create new client',async ()=>{
        await browser.url(browser.options.baseUrl);
        await LoginPage.doLogin();
        // уже тут шаги открытия формы клиента и заполнения
        await (await browser.$('button.clients-add-user-dialog')).click()
        await browser.pause(5000);
    })
})