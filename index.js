const browserObject = require('./puppeteerBrowser');
const scraperController = require('./scraperConfig');

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
scraperController(browserInstance)
