const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "kbzut1",
  e2e: {
    baseUrl: 'https://api.restful-api.dev',
    defaultCommandTimeout: 5000,
    video: true, // Habilita gravação de vídeo
    videosFolder: "cypress/videos", // Define a pasta para salvar os vídeos
    screenshotOnRunFailure: true, // Tira screenshots automaticamente quando um teste falha
    screenshotsFolder: "cypress/screenshots",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
