const { Builder } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const options = new firefox.Options();

// Set browser download path
options.setPreference("browser.download.dir", "C:\\mySeleniumDownlaods");
options.setPreference("browser.download.folderList", 2);
// Tell browser to always download csv files
options.setPreference("browser.helperApps.neverAsk.saveToDisl", "application/x-csv");

const driver = new Builder().forBrowser("firefox").build();

driver.get("http://facebook.com");
