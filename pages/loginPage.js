const { default: expect } = require("expect");
const loginLocator = require("./loginLocator");

class LoginPage {
    constructor(page) {
        this.page = page
    }

    async navigateTo(loginUrl) {
        await this.page.goto(loginUrl);
        await this.page.waitForTimeout(3000);
    }

    async loginToApp(username, password) {
        await this.page.type(loginLocator.username, username);
        // await this.page.waitForTimeout(2000);
        await this.page.type(loginLocator.password, password);
        // await this.page.waitForTimeout(2000);
        await this.page.click(loginLocator.loginButton);
        // await this.page.waitForTimeout(2000);
    }

    async verifyDashboardUrl(dashboardUrl) {
        await this.page.waitForTimeout(3000);
        const url = await this.page.url(dashboardUrl);
        expect(url).toEqual("https://m.internmatch.io/"+dashboardUrl);
        await this.page.waitForTimeout(3000);
    }

    async verifyCredentials() {
        await this.page.waitForSelector('#app > div > header > div > p');
        const text = await this.page.$eval('#app > div > header > div > p', el => el.textContent);
        expect(text).toEqual("Welcome back, Alvianto!");

    }
}

module.exports = LoginPage;