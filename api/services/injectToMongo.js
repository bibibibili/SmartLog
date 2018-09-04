const {
  User
} = require('../models/user')

require('./loadJson')(function (_err, res) {
  var user = new User({
    userID: res.userID,
    email: res.email
  })
  user.save()
  console.log('Added to mongo!')
})
