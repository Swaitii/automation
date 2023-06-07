const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6efvr5',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity:false,
    specPattern : ['cypress/integration/examples/standarduser.js','cypress/integration/examples/lockeduser.js','cypress/integration/examples/problemuser.js']
    
  },
});
