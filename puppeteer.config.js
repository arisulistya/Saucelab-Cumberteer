module.exports = {
    // Additional Puppeteer config
    wait: {
      short: 2000,
      medium: 5000,
      long: 10000,
    },

    launchOptions: {
      headless: false, // Set to false for non-headless mode (GUI visible)
      slowMo: 0, // Slows down Puppeteer operations by 100 milliseconds
  
      // Default viewport configuration
      defaultViewport: {
        width: 1366,
        height: 768,
      },
  
      // Enable DevTools in the launched browser
      devtools: false,
    },
};
  