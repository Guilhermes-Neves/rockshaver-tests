require('dotenv').config()
const { configurePlugin } = require('cypress-mongodb')

module.exports = {
  projectId: "dys57z",
  env: {
    mongodb: {
      uri: process.env.MONGO_URI,
      database: process.env.DATABASE,
    },
    baseApi: process.env.API_URL
  },
  e2e: {
    setupNodeEvents(on, config) {
      configurePlugin(on)
    },
    baseUrl: process.env.WEB_URL,
    video: true
  },
};
