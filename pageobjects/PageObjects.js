var EC = protractor.ExpectedConditions;


var PageObject = function() {
  var burgerkingCardPicker = element(by.xpath("//div[@class='swiper-slide pb-card-picker__cards swiper-slide-active']//img[@alt='KSH']"));
  this.cookieAccept = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//button[@id='onetrust-accept-btn-handler']"))));
    return element(by.xpath("//button[@id='onetrust-accept-btn-handler']"));
  };

  this.register = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//div[contains(text(),'Anmelden')]"))));
    return element(by.xpath("//div[contains(text(),'Anmelden')]"));
  };

  this.registerPageHeadingText = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//h3[contains(text(),'Jetzt mit PAYBACK starten')]"))));
    return element(by.xpath("//h3[contains(text(),'Jetzt mit PAYBACK starten')]"));
  };

  this.registePageradioButton = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//label[contains(text(),'Noch keine PAYBACK Karte? Neue Karte auswählen.')]"))));
    return element(by.xpath("//label[contains(text(),'Noch keine PAYBACK Karte? Neue Karte auswählen.')]"));
  };

  this.slider = function() {
    browser.wait(EC.visibilityOf(element(by.css(".pb-slider__arrow-right"))));
    return element(by.css(".pb-slider__arrow-right"));
  };

  this.signUpButton = function() {
    browser.wait(EC.visibilityOf(element(by.css(".pb-sign-up-block_edited .pb-sign-up__button"))));
    return element(by.css(".pb-sign-up-block_edited .pb-sign-up__button"));
  };

  this.emailField = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//input[@id='email']"))));
    return element(by.xpath("//input[@id='email']"));
  };

  this.passwordField = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//input[@id='pin']"))));
    return element(by.xpath("//input[@id='pin']"));
  };

  this.furtherbutton = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//div[@data-block-type='authentication']//span[contains(text(),'Weiter')]"))));
    return element(by.xpath("//div[@data-block-type='authentication']//span[contains(text(),'Weiter')]"));
  };

  this.oneStepButton = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//div[contains(text(),'Nur noch ein Schritt')]"))));
    return element(by.xpath("//div[contains(text(),'Nur noch ein Schritt')]"));
  };

  this.anredeFieldError = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//select[@id='salutation']//../..//div[@class='pb-form-field__error-msg pb-form-field__error-msg_hidden']"))));
    return element(by.xpath("//select[@id='salutation']//../..//div[@class='pb-form-field__error-msg pb-form-field__error-msg_hidden']"));
  };

  this.vornameFieldError = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//input[@id='firstName']//../..//div[@class='pb-form-field__error-msg pb-form-field__error-msg_hidden']"))));
    return element(by.xpath("//input[@id='firstName']//../..//div[@class='pb-form-field__error-msg pb-form-field__error-msg_hidden']"));
  };

  this.nachnameFieldError = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//input[@id='lastName']//../..//div[@class='pb-form-field__error-msg pb-form-field__error-msg_hidden']"))));
    return element(by.xpath("//input[@id='lastName']//../..//div[@class='pb-form-field__error-msg pb-form-field__error-msg_hidden']"));
  };

  this.geburtsdatumFieldError = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//input[@name='birthday']//../..//div[@class='pb-form-field__error-msg pb-form-field__error-msg_hidden']"))));
    return element(by.xpath("//input[@name='birthday']//../..//div[@class='pb-form-field__error-msg pb-form-field__error-msg_hidden']"));
  };

  this.straßeFieldError = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//input[@id='street']//../..//div[@class='pb-form-field__error-msg pb-form-field__error-msg_hidden']"))));
    return element(by.xpath("//input[@id='street']//../..//div[@class='pb-form-field__error-msg pb-form-field__error-msg_hidden']"));
  };

  this.hausnummerFieldError = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//input[@id='floor']//../..//div[@class='pb-form-field__error-msg pb-form-field__error-msg_hidden']"))));
    return element(by.xpath("//input[@id='floor']//../..//div[@class='pb-form-field__error-msg pb-form-field__error-msg_hidden']"));
  };

  this.plzFieldError = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//input[@id='zipCode']//../..//div[@class='pb-form-field__error-msg pb-form-field__error-msg_hidden']"))));
    return element(by.xpath("//input[@id='zipCode']//../..//div[@class='pb-form-field__error-msg pb-form-field__error-msg_hidden']"));
  };

  this.ortFieldError = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//input[@id='city']//../..//div[@class='pb-form-field__error-msg pb-form-field__error-msg_hidden']"))));
    return element(by.xpath("//input[@id='city']//../..//div[@class='pb-form-field__error-msg pb-form-field__error-msg_hidden']"));
  };

  this.salutation = function() {
    browser.wait(EC.visibilityOf(element(by.css("select[name='salutation']"))));
    return element(by.css("select[name='salutation']"));
  };

  this.firstName = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//input[@id='firstName']"))));
    return element(by.xpath("//input[@id='firstName']"));
  };

  this.lastName = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//input[@id='lastName']"))));
    return element(by.xpath("//input[@id='lastName']"));
  };

  this.calendar = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//input[@placeholder='TT/MM/JJJJ']"))));
    return element(by.xpath("//input[@placeholder='TT/MM/JJJJ']"));
  };

  this.birthDayDate = function() {
    browser.wait(EC.visibilityOf(element(by.css(".js__input-dob-day"))));
    return element(by.css(".js__input-dob-day"));
  };

  this.birthDayMonth = function() {
    browser.wait(EC.visibilityOf(element(by.css(".js__input-dob-month"))));
    return element(by.css(".js__input-dob-month"));
  };

  this.birthDayYear = function() {
    browser.wait(EC.visibilityOf(element(by.css(".js__input-dob-year"))));
    return element(by.css(".js__input-dob-year"));
  };

  this.street = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//input[@id='street']"))));
    return element(by.xpath("//input[@id='street']"));
  };

  this.floor = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//input[@id='floor']"))));
    return element(by.xpath("//input[@id='floor']"));
  };

  this.zipCode = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//input[@id='zipCode']"))));
    return element(by.xpath("//input[@id='zipCode']"));
  };

  this.city = function() {
    browser.wait(EC.visibilityOf(element(by.xpath("//input[@id='city']"))));
    return element(by.xpath("//input[@id='city']"));
  };
};
module.exports = new PageObject();
