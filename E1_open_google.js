const { Builder, By, Key, util } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");

async function example() {
  const profilePath = "./recourses/firefoxProfile";
  const options = new firefox.Options();
  options.setProfile(profilePath);

  let driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
  await driver.get("http://google.com");

  await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
}

example();
