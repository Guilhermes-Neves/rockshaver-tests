const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImU1NDMyZWY5LTE4YjEtNGExNi04OTUxLTUxODMyMGIzM2JkYS0xNzM4MDkzMTI0Nzg1IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMjk0ZjViNWEtYzE0Yy00NGY0LTk1ZDktYjBiZjA5YjdiMWM3IiwidHlwZSI6InQifQ.lYqrdYCBZByNCWO9apIbOqJhbUnwwqSLuDZyg7TRE4w'

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