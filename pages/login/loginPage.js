const { default: expect } = require("expect");
const loginLocator = require("./loginLocator");
const { wait } = require("../../puppeteer.config");

class LoginPage {
    constructor(page) {
        this.page = page
    }

    async navigateTo(loginUrl) {
        await this.page.goto(loginUrl);
        await this.page.waitForTimeout(wait.medium);
    }

    async loginToApp(username, password) {
        await this.page.type(loginLocator.username, username);
        // await this.page.waitForTimeout(wait.short);
        await this.page.type(loginLocator.password, password);
        // await this.page.waitForTimeout(wait.short);
        await this.page.click(loginLocator.loginButton);
        // await this.page.waitForTimeout(wait.short);
    }

    async verifyDashboardUrl(dashboardUrl) {
        await this.page.waitForTimeout(wait.short);
        const url = await this.page.url(dashboardUrl);
        expect(url).toEqual(dashboardUrl);
        await this.page.waitForTimeout(wait.short);
    }

    async verifyErrorLogin() {
        await this.page.waitForTimeout(wait.short);
        const errMessage = await this.page.$(loginLocator.errMessage);
        expect(errMessage).toBeTruthy();
        await this.page.waitForTimeout(wait.short);
    }

}

module.exports = LoginPage;