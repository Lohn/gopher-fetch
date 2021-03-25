const test = require('tape')
const makeGopher = require('./')

test('fetch data from known page', async (t) => {
  try {
    const fetch = makeGopher()

    const url = 'gopher://gopher.floodgap.com/'
    const response = await fetch(url)
    const { headers, status } = response
    const contentType = headers.get('content-type')
    const text = await response.text()

    t.equal(status, 200, 'got 200 status code')
    t.equal(contentType, 'text/gopher', 'got gopher hole')
    t.ok(text, 'got page text')

    t.end()
  } catch (e) {
    t.error(e)
  }
})
