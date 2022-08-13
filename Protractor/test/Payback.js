var conf = require("../conf/conf.js")
var po = require('../pageobjects/PageObjects.js');
var testdata= require('../testdata/testadata.js');
var common = require('../utils/common.js');

describe("Payback Assessment Test", function() {
  browser.waitForAngularEnabled(false)
  browser.ignoreSynchronization = true;
  browser.manage().window().maximize();

  it("verify Payback home page title", function() {
    browser.get(testdata.URL);
    browser.driver.sleep(5000);
    po.cookieAccept().click();
    browser.driver.sleep(5000);
    browser.getTitle().then(function(pagetitle){
      expect(pagetitle).toEqual(testdata.pageTitle);
    });
  });

  it("register User", function() {
    po.register().click();
    po.registerPageHeadingText().getText().then(function(registerPageHeading){
      expect(registerPageHeading).toEqual(testdata.registerPageHeading);
    });
    po.registePageradioButton().click();
    common.sliderCheck();

    po.signUpButton().click();
    po.emailField().sendKeys(testdata.userName);
    po.passwordField().sendKeys(testdata.password);
    po.furtherbutton().click();
    browser.driver.sleep(5000);
    po.oneStepButton().click();

    common.verifyUIError();
    common.fillFormData();

    po.oneStepButton().click();
    browser.quit();
  });
});