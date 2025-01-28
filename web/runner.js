const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImU1NDMyZWY5LTE4YjEtNGExNi04OTUxLTUxODMyMGIzM2JkYS0xNzM4MDkzMjA3MzQxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNDY5NTk3MjgtZmMyYi00ODA2LWI1OTEtYmJlY2E0MTFjNjQ0IiwidHlwZSI6InQifQ.HcvZEfviK47lMIHC2MdHS4r6MTfyz4ioiW2KerOw9M4'

cypress.run({
  browser: 'chrome'
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