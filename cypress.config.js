const { defineConfig } = require('cypress');

module.exports = defineConfig({
  chromeWebSecurity: false,
  trashAssetsBeforeRuns: true,
  video: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    "reportDir": "Report",
    "overwrite": true,
    "video": false,
    "screenshotsFolder": 'Report/screenshots',
  },
  "compilerOptions": {
    "types": ["cypress", "cypress-real-events"]
  },
  e2e: {
    slowTestThreshold: 15000,
    baseUrl: 'https://honswer.com/version-test',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});