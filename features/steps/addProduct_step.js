const { When, Then, Given } = require("@cucumber/cucumber");
const ProductPage = require("../../pages/products/productsPage");

When('I add single product to Cart', async function(){
    const productPage = new ProductPage(this.page);
    await productPage.addSingleProduct();
    
});

Then('I should see the correct product on the cart page', async function(){
    const productPage = new ProductPage(this.page);
    await productPage.verifyCart();
    
});

When('I add multiple product to Cart', async function(){
    const productPage = new ProductPage(this.page);
    await productPage.addMultipleProduct();
})

Then('I should see correct multiple item on the cart page', async function(){
    const productPage = new ProductPage(this.page);
    await productPage.verifyMultipleCart();
})