const mongoose = require('mongoose');

const userSchemma = mongoose.Schema({

  name : {
    type : String,
    required : [true , "Name is Required"],

  },
  email : {
    type : String,
    required : [true , "Email is Required"],
    
  },
  password : {
    type : String,
    required : [true , "Password is Required"]
  },
  phone : {
    type : String,
    required : [true , "Phone Number is Required"]
  }


});


const User = mongoose.model("User" , userSchemma );


module.exports = User;