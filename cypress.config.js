const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '7zxj6f',
})


module.exports = defineConfig({
  projectId: '7zxj6f',
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 60000,


    setupNodeEvents(on, config) {
      // implement node event listeners here
    },


  },
});
