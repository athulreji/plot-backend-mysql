const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const User= new Schema({
  email: String,
  password: {
    type: String,
    required: true,
  },
  name:String,
  leasedlands:[String],
  parking:[String],
  share_names:[String],
  share_count:[Number],
  location:[String],
  
  portfolio:{
    type:Number,
    default:0
  },
  money:{
    type:Number,
    default:300000
  }


});

const UserSchema = mongoose.model("User", User);
module.exports = UserSchema;
