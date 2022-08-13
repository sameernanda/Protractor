# Protractor

Protractor Tool Automation with Jasmine
Local Setup

    Clone this repository and open Protractor folder in your IDE (e.g - IntelliJ)
    Make sure your system has node / npm / protractor / jasmine / jasmine-reporter installed.
    Update and start the webdriver manager in a terminal and run your tests in another.
    
Report

    When the test is run, report is generated in in the same folder with name junitresults.xml

FAQ

    Q: How to run the test ?

    A: In protractor we need to run the configuration file as it has teh spec file mentioend to be run.
    eg.  protractor conf.js

    Q: How to run tests on different in browser and headless mode?

    A: Configuration file contains the option to run the tests in browser and headless mode.

    eg.  Browser mode - args: ['--no-sandbox', '--test-type=browser', '--disable-browser-side-navigation'],
         Headless Mode - args: ["--headless", "--remote-debugging-port=9222", "--verbose", "--disable-gpu", "--disable-web-security", "--window-size=800x600"],


