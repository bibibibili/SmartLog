var express = require('express')
var router = express.Router()
const {
  User
} = require('../models/user')
/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log('hi')
  res.send('respond with a resource1')
})
router.post('/add', (req, res) => {
  var user = new User({
    userID: 1,
    email: 'nana@sample.com'
  })
  user.save().then((user) => {
    res.send(user)
  }, (e) => {
    res.status(400).send(e)
  })
})

router.get('/get/:userID', (req, res) => {
  var userID = req.params.userID
  User.findOne({ userID: userID }).then((user) => {
    res.send(user)
    console.log('Found user!')
  }, (e) => {
    res.status(400).send(e)
  })
})

module.exports = router
