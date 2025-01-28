const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU1ODBjNzg3LTk4NTAtNDg2NC1iOWM1LThmYzMxZmFiNTk2Ni0xNzM4MDk0ODY0ODU4IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYTAwNDcwNDgtM2JjZS00Njk0LTg4ZGEtMDkyYzc2M2MwZGNlIiwidHlwZSI6InQifQ.hlmPMXsJBqf72GSVwOFhuQYKJ7UvgkwtDEJHIB9zJ2M'

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