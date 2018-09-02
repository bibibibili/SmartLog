// import { connect } from 'mongoose'
let mongoose = require('mongoose')
const server = '127.0.0.1:27017'
const dbName = 'test'

// Create connection to mongoose
mongoose.connect(`mongodb://${server}/${dbName}`)
mongoose.Promise = global.Promise
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

var Schema = mongoose.Schema

// Define User Schema
var UserSchema = new Schema({
  username: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  }
}, { collection: 'Users' })
var User = mongoose.model('User', UserSchema)

var nana = new User({
  username: 'nana',
  email: 'nana@sample.com'

})

nana.save(function (error) {
  console.log('Your user has been saved!')
  if (error) {
    console.error(error)
  }
})
