Feature: Add Product to Cart

Scenario: Success add Single Product to Cart
    Given Success logged in as valid user
    When I add single product to Cart
    Then I should see the correct product on the cart page

Scenario: Success add Multiple Product to Cart
    Given Success logged in as valid user
    When I add multiple product to Cart
    Then I should see correct multiple item on the cart page