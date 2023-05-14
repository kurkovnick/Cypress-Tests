const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    
    },
    defaultCommandTimeout : 100000,
    pageLoadTimeout : 160000,
    baseUrl : 'https://schoolofqa.com',
    video : false,
    screenshotOnRunFailure : false,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
