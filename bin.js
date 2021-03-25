#!/usr/bin/env node
const fetch = require('./')()

const url = process.argv[2]

if (url) {
  fetch(url).then((response) => {
    process.stdout.write(response.body)
  })
} else {
  console.log('Usage:\n\tgopher-fetch gopher://gopher.floodgap.com/')
}
