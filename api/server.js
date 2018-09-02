const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 5000
const db = require('./utils/db')
const {
  User
} = require('./models/user')
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Listening on ${PORT}`))

app.get('/', (req, res) => {
  res.send(`Listening on ${PORT}`)
})
app.post('/user', (req, res) => {
  var user = new User({
    userID: req.body.userID,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  })
  // result = User.addUser(user);
  user.save().then((user) => {
    res.send(user)
  }, (e) => {
    res.status(400).send(e)
  })
})
