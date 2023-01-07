import LoginPage from '../pageobjects/examples/login.page.js'
import SecurePage from '../pageobjects/examples/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
// перейти на страницу такого то сайта
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        // ввести логин
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })
})


