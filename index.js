const gopherLib = require('gopher-lib')
const request = new gopherLib.Client({parseDir:false, timeout: 5000});
const makeFetch = require('make-fetch')

module.exports = function makeGopher () {
  return makeFetch(({ url, referrer }, sendResponse) => {
    const toRequest = new URL(url, referrer)
    request.get(toRequest.href, (err, res) => {
      type = res.request.resource.type;
      if (err) {
        sendResponse({
          statusCode: 500,
          headers: {},
          data: err
        })
      } else {
        if ( type==='0' || type==='h' || type==='4' || type === '6' || type === 'M' ){
          data = res.text
        } else  
         if ( type == '1' || type == '7' ){
            data = res.directory
          } else {
            data = res.buffer
          }
        sendResponse({
          statusCode: 200,
          statusText: "OK",
          headers: {},
          data: data
        })
      }
    })
  })
}