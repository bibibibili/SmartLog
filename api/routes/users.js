var express = require('express')
var router = express.Router()
const {
  User
} = require('../models/user')
/* GET users listing. */

router.post('/:userID', (req, res) => {
  var user = new User({
    userID: 2,
    email: '123@sample.com'
  })
  user.save().then((user) => {
    res.send(user)
  }, (e) => {
    res.status(400).send(e)
  })
})

router.get('/:userID', (req, res) => {
  var userID = req.params.userID
  User.findOne({ userID: userID }).then((user) => {
    res.send(user)
    console.log('Found user!')
  }, (e) => {
    res.status(400).send(e)
  })
})

module.exports = router
