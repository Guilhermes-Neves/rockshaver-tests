const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImU1NDMyZWY5LTE4YjEtNGExNi04OTUxLTUxODMyMGIzM2JkYS0xNzM4MDkyNzY0MTQ4IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNTJlZTZiNDYtMmYwNi00YWJhLWEwYjgtMGQ5NzA3ZjBlMTcyIiwidHlwZSI6InQifQ.VHwrHQEx0NbaJDsAUQb_ldXT4XaSiiAjjHwqmm0MomY'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})