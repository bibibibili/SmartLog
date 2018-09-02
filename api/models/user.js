const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('../utils/db')

var userSchema = new Schema({
  userID: {
    type: Number,
    required: true },
  email: {
    type: String,
    required: true
  }
}, { collection: 'User' })

const User = mongoose.model('User', userSchema)
module.exports = {
  User
}
