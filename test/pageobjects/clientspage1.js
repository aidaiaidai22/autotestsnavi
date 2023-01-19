class ClientPage
{
    wait: 2000, // ms to wait for expectation to succeed
    interval: 100, // interval between attempts
}
await browser.url('https://webdriver.io/')
await expect(browser).toHaveUrl('https://webdriver.io')
await browser.url('https://webdriver.io/')
await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js')

const elem = await $('#someElem')
await expect(elem).toBeDisplayed()
