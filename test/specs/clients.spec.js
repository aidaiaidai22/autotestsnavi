const LoginPage = require("../pageobjects/LoginPage");
const ClientPage = require("../pageobjects/ClientPage");

describe('Clients test',()=> {
    let user = {
        name: "father",
        surname: "Bakai's father",
        middlename: "Bakai's father",
        email: "father2505@gmail.com",
        birth: "05/06/1996",
        phone: "99688855127",
    }

    beforeEach( async()=>{
        await browser.url(browser.options.baseUrl);
        await LoginPage.doLogin();
    })

    afterEach( async()=>{
        await browser.reloadSession();
    })

    it ('should Create new client', async () =>{
        await ClientPage.createClientButton.waitForDisplayed({timeout:5000});
        await ClientPage.createClientButton.click();
        await ClientPage.surnameField.waitForDisplayed({timeout:5000});
        await ClientPage.surnameField.setValue(user.name);
        await ClientPage.firstnameField.setValue(user.surname)
        await ClientPage.genderRadio.click();
        await ClientPage.emailField.setValue(user.email);
        await ClientPage.middleNameField.setValue(user.middlename);
        await ClientPage.birthField.setValue(user.birth);
        await ClientPage.phoneField.setValue(user.phone);

        await ClientPage.fillChild();
        await ClientPage.saveButton.click();
        await browser.pause(5000)
        await browser.acceptAlert();

    })


    it('should read new client',async ()=>{
        await ClientPage.openFirstClientDetails.waitForDisplayed({ timeout: 10000 });
        await ClientPage.openFirstClientDetails.click();
        await ClientPage.editModalPage.waitForDisplayed({ timeout: 10000 });
        let surname = await ClientPage.editSurnameField.getValue()
        let name = await ClientPage.editFirstnameField.getValue()
        await browser.pause(5000);
        
        await expect(user.name).toHaveText(name);
        await expect(user.surname).toHaveText(surname);
        // await expect(user.email).toHaveText(email);
        // await expect(user.birth).toHaveText(birth);
        // await expect(user.phone).toHaveText(phone);
    })
    

})