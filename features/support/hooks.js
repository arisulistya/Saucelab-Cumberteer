const { Before, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { default: puppeteer } = require("puppeteer");
const puppeteerConfig = require("../../puppeteer.config");

let browser = null;
let page = null;

setDefaultTimeout(30000);

Before(async function () {
    browser = await puppeteer.launch(puppeteerConfig.launchOptions);
    page = await browser.newPage();

    this.browser = browser;
    this.page = page;

})

After(async function () {
    await browser.close();
})