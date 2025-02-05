// Common JS: Nodejs format before ESModule was added to base js
const { Builder, By, Key, until } = require("selenium-webdriver");

async function run() {
  let driver = await new Builder().forBrowser("firefox").build();
  await driver.get("https://www.google.com");
  await driver.quit();
}

run();
//----------------------------------------------------------------------

// ESM: Static import (recommended). Youll jave to specify es module in package.json { "type": "module"}
import { Builder, By, Key, until } from "selenium-webdriver";

async function run() {
  let driver = await new Builder().forBrowser("firefox").build();
  await driver.get("https://www.google.com");
  await driver.quit();
}

run();
//----------------------------------------------------------------------

// ESM: Dynamic import (recommended). Works even if the package is not fully ESM compatible

async function run() {
  const { Builder, By, Key, until } = await import("selenium-webdriver");

  let driver = await new Builder().forBrowser("firefox").build();
  await driver.get("https://www.google.com");
  await driver.quit();
}

run();
