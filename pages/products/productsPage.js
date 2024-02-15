const { default: expect } = require("expect");
const { wait } = require("../../puppeteer.config");
const productLocator = require("./productsLocator");

class ProductPage {
    constructor(page) {
        this.page = page;
    }

    async addSingleProduct() {
        await this.page.waitForTimeout(wait.short);
        await this.page.click(productLocator.bag.addToCart);
    }

    async verifyCart() {
        await this.page.waitForTimeout(wait.short);
        await this.page.click(productLocator.cart);
        await this.page.waitForTimeout(wait.short);
        const bagTitle = await this.page.$(productLocator.bag.title);
        expect(bagTitle).toBeTruthy();
    }

    async addMultipleProduct() {
        await this.page.waitForTimeout(wait.short);
        await this.page.click(productLocator.tshirt.addToCart);
        await this.page.click(productLocator.bag.addToCart);
    }

    async verifyMultipleCart() {
        await this.page.waitForTimeout(wait.short);
        await this.page.click(productLocator.cart);
        await this.page.waitForTimeout(wait.short);
        const tshirtTitle = await this.page.$(productLocator.tshirt.title);
        const bagTitle = await this.page.$(productLocator.bag.title);
        expect(tshirtTitle).toBeTruthy();
        expect(bagTitle).toBeTruthy();
    }

};

module.exports = ProductPage;