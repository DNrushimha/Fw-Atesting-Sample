const { defineConfig } = require("cypress");

module.exports = {
  projectId: "7zxj6f",
  // ...rest of the Cypress project config
}


module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 60000,


    setupNodeEvents(on, config) {
      // implement node event listeners here
    },


  },
});
