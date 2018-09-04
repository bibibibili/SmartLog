var mongoose = require('mongoose')
const {
  User
} = require('../models/user')

User.find({ 'userID': 2 }, function (err, result) {
  if (err) console.log(err)
  console.log('result is ')
  var res = JSON.stringify(result)
  var json = JSON.parse(res)
  console.log(json[0].userID)
})
