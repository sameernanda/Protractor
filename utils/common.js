var EC = protractor.ExpectedConditions;
var po = require('../pageobjects/PageObjects.js');
var testdata= require('../testdata/testadata.js');

var common = function() {
  this.verifyUIError = function() {
    po.anredeFieldError().getText().then(function(anredeFieldError){
      expect(anredeFieldError).toEqual(testdata.salutationFieldError);
    });
    po.vornameFieldError().getText().then(function(vornameFieldError){
      expect(vornameFieldError).toEqual(testdata.firstNameFieldError);
    });
    po.nachnameFieldError().getText().then(function(nachnameFieldError){
      expect(nachnameFieldError).toEqual(testdata.lastNameFieldError);
    });
    po.geburtsdatumFieldError().getText().then(function(geburtsdatumFieldError){
      expect(geburtsdatumFieldError).toEqual(testdata.birthDayFieldError);
    });
    po.straßeFieldError().getText().then(function(straßeFieldError){
      expect(straßeFieldError).toEqual(testdata.streetFieldError);
    });
    po.hausnummerFieldError().getText().then(function(hausnummerFieldError){
      expect(hausnummerFieldError).toEqual(testdata.floorFieldError);
    });
    po.plzFieldError().getText().then(function(plzFieldError){
      expect(plzFieldError).toEqual(testdata.zipCodeFieldError);
    });
    po.ortFieldError().getText().then(function(ortFieldError){
      expect(ortFieldError).toEqual(testdata.cityFieldError);
    });
  };

  this.selectDropdownbyNum = function ( element, optionNum ) {
    if (optionNum){
      var options = element.all(by.tagName('option'))   
        .then(function(options){
          options[optionNum].click();
        });
    }
  }

  this.fillFormData = function() {
    this.selectDropdownbyNum(po.salutation(),"2");
    po.firstName().sendKeys("Pay");
    po.lastName().sendKeys("Back");
    po.calendar().click();
    po.birthDayDate().sendKeys("11");
    po.birthDayMonth().sendKeys("08");
    po.birthDayYear().sendKeys("2022");
    po.street().sendKeys( "Street");
    po.floor().sendKeys("Floor");
    po.zipCode().sendKeys("1242");
    po.city().sendKeys("Munich");
  }

  this.sliderCheck = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//div[@class='swiper-slide pb-card-picker__cards swiper-slide-active']//img[@alt='BURGER KING®']"))),10000, "not on this page").then(
      function(passed){
        element(by.xpath("//div[@class='swiper-slide pb-card-picker__cards swiper-slide-active']//img[@alt='BURGER KING®']")).click();
      }, 
      function(error) {
        po.slider().click();
        browser.wait(EC.visibilityOf(element(by.xpath("//div[@class='swiper-slide pb-card-picker__cards swiper-slide-active']//img[@alt='BURGER KING®']"))),10000, "not on this page")
      })
    element(by.xpath("//div[@class='swiper-slide pb-card-picker__cards swiper-slide-active']//img[@alt='BURGER KING®']")).click();
  };
};
module.exports = new common();
