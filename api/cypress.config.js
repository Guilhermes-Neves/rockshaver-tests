require('dotenv').config()
const { configurePlugin } = require('cypress-mongodb')
module.exports = {
  env: {
    mongodb: {
      uri: process.env.MONGO_URI,
      database: process.env.DATABASE,
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      configurePlugin(on)
    },
    baseUrl: process.env.API_URL
  },
};
