const { Given, When, Then } = require("@cucumber/cucumber");
const LoginPage = require("../../pages/loginPage");

Given('I am on the {string} page', async function(loginUrl){
    const loginPage = new LoginPage(this.page);
    await loginPage.navigateTo(loginUrl);
});

When('I login with {string} and {string}', async function(username, password){
    const loginPage = new LoginPage(this.page);
    await loginPage.loginToApp(username, password);
});

Then('I should redirected to {string}', async function(dashboardUrl){
    const loginPage = new LoginPage(this.page);
    await loginPage.verifyDashboardUrl(dashboardUrl);

});

Then('I should see correct credentials on the dashboard page', async function(){
    const loginPage = new LoginPage(this.page);
    await loginPage.verifyCredentials();
})



