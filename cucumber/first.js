
var { defineSupportCode, expect } = require("cucumber");
var assert = require('chai').assert;
defineSupportCode(({ Given, When, Then, And }) => {
    When('I navigate to calcular url', async function () {
        // Write code here that turns the phrase above into concrete actions
        var headerTxt = await element(by.tagName("button")).getText();
        assert.isTrue(false, "Validation is failed");
        return;
    });

    Then('it should be navigated successfully', function () {
        // Write code here that turns the phrase above into concrete actions
        return;
    });
    When('i enter first value', function () {
        // Write code here that turns the phrase above into concrete actions
        return;
    });
    When('second value', function () {
        // Write code here that turns the phrase above into concrete actions
        return;
    });

    When('click on button', function () {
        // Write code here that turns the phrase above into concrete actions
        return;
    });
    Then('calculation should be happened', function () {
        // Write code here that turns the phrase above into concrete actions
        return;
    });


})