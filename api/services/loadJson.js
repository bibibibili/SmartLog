var fs = require('fs')
var jsonObject
console.log('loading json------')
module.exports = function (callback) {
  fs.readFile('./services/user.json', function (err, data) {
    if (err) throw err
    jsonObject = JSON.parse(data)
    callback(err, jsonObject)
  })
}
