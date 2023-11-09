const mongoose = require('mongoose')
const clientSchema = new mongoose.Schema({
  firstName : {type :String  , required : true},
  lastName : {type :String  , required : true},
  email : {type :String  , required : true},
  mobile : {type :Number  , required : true},
  project : {type :String  , required : true},
},{timestamps:true})

module.exports =  mongoose.model('client' , clientSchema , 'client')