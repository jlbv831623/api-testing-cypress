const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",
    video: true,
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
    setupNodeEvents(on, config) {
      // Aquí se pueden agregar event listeners si quieres
    },
  },
});


