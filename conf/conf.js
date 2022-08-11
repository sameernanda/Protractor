exports.config = {
      seleniumAddress: 'http://localhost:4444/wd/hub',
      capabilities: {
        'directConnect': true,
        'browserName': 'chrome',
         "goog:chromeOptions": {
            // Get rid of --ignore-certificate yellow warning
            args: ['--no-sandbox', '--test-type=browser', '--disable-browser-side-navigation'],
            //args: ["--headless", "--remote-debugging-port=9222", "--verbose", "--disable-gpu", "--disable-web-security", "--window-size=800x600"],
            prefs: {
                'download': {
                    'prompt_for_download': false,
                    'directory_upgrade': true
                  }
              }
            },
      specs: ['../test/Payback.js'],
      framework: 'jasmine',
      allScriptsTimeout: 9000,
      defaultTimeoutInterval: 120000,
      onPrepare: function() {
          var jasmineReporters = require('/Users/samirananda/Protractor/node_modules/jasmine-reporters');
          jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true));
     }
   }
 };