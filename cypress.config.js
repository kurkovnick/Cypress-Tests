const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout : 25000,
    pageLoadTimeout : 160000,
    baseUrl : 'https://schoolofqa.com',
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
