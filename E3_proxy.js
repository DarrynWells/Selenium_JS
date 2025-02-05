async function test() {
  const { Builder } = require("selenium-webdriver");
  const firefox = require("selenium-webdriver/firefox");
  const options = new firefox.Options();
  options.setProfile("./recourses/firefoxProfile");

  const proxy = require("selenium-webdriver/proxy");
  const proxyServer = "36.65.66.148.8080";

  const driver = await new Builder()
    .forBrowser("firefox")
    .setFirefoxOptions(options)
    // .setProxy(proxy.manual({ http: proxyServer, https: proxyServer }))
    .build();

  driver.get("https://whatismyipaddress.com/");
}

test();
