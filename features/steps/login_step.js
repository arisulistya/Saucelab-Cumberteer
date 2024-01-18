const { Given, When, Then } = require("@cucumber/cucumber");
const LoginPage = require("../../pages/loginPage");
require('dotenv').config();

Given('I am on the Login page', async function(){
    let baseUrl;
    switch (process.env.NODE_ENV) {
        case 'test':
            baseUrl = process.env.TEST_URL;
            break;
        case 'prod':
            baseUrl = process.env.PROD_URL;
            break;
        default:
            throw new Error('Invalid NODE_ENV value, Please set the environment before running the test');
    }

    const loginPage = new LoginPage(this.page);
    await loginPage.navigateTo(baseUrl);
});

When('I input valid user credentials and click login', async function(){
    const loginPage = new LoginPage(this.page);
    await loginPage.loginToApp(process.env.DEFAULT_USER, process.env.DEFAULT_PASS);
});

Then('I should see correct dashboard url', async function(){
    const loginPage = new LoginPage(this.page);
    await loginPage.verifyDashboardUrl(process.env.BASE_URL + process.env.DASHBOARD_URL);
});

When('I input invalid user credentials and click login', async function(){
    const loginPage = new LoginPage(this.page);
    await loginPage.loginToApp("locked_out_user", "secret_sauce");
});

Then('I should see validation message', async function(){
    const loginPage = new LoginPage(this.page);
    await loginPage.verifyErrorLogin();
});


