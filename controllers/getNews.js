const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://ge.globo.com/futebol/times/sao-paulo/');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

    // Take a screenshot of the page
    await page.screenshot({path: 'screenshot.png'});

  await browser.close();
})();