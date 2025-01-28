const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImU1NDMyZWY5LTE4YjEtNGExNi04OTUxLTUxODMyMGIzM2JkYS0xNzM4MDkzMjA3MzQxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYWRlODgzOGQtOGE2ZC00NDI3LTk4NTEtMDUyYTk0M2FmMzZkIiwidHlwZSI6InQifQ.E6UV98sXWHLtacuYiNuXIrGFjQM8N6ezUHpLt4vGtW4'

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